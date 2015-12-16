class VideosController < ApplicationController
  before_action :authenticate_user!, only: [:new, :edit, :update]
  before_action :authenticate_author, only: [:edit, :update]
  before_action :set_video, only: [ :show, :edit, :update, :add_to_views, :remove_from_views, :like_video_track, :unlike_video_track ]
  before_action :set_video_track_and_user, only: [ :add_to_views, :remove_from_views, :like_video_track, :unlike_video_track ]

  def index
    if params[:filter].present?
      if params[:filter] == 'random'
        @videos = Video.page params[:page]
      elsif params[:filter] == 'recent'
        @videos = Video.order(updated_at: :desc).page params[:page]
      end
    elsif Video.has_tracks
      @videos = Kaminari.paginate_array(Video.has_tracks.sort_by(&:likes).reverse).page params[:page]
    else
      @videos = Video.where(id: nil)
    end
    respond_to do |format|
      format.js
      format.html
    end
  end

  def search
    keyword = params[:search]
    if keyword.present?
      # search by genre
      if Genre.pluck(:name).include? keyword.downcase
        @videos = Genre.where(name: keyword.downcase).first.videos
        @genre = Genre.where(name: keyword.downcase).first
      else
        # search by title
        @videos = Video.search(keyword)
        if @videos.any?
        # search by author
        elsif User.search(keyword).any?
          @authors = User.search(keyword)
          @videos  = Video.where(user_id: @authors.results.map(&:id))
        end
      end
    else #nothing in the search box
      @videos = Video.has_tracks
    end
    # Genre filter
    videos = Video.where(id: nil)
    genre_filter = false
    Genre.all.each do |genre|
      if params["#{genre.id}"].present?
        genre_filter = true
        videos = videos + genre.videos
      end
    end
    @videos = @videos & videos if genre_filter
    # sorting videos after search
    if params[:filter].present? && params[:filter] == 'recent'
      @videos = @videos.sort_by(&:created_at).reverse
    elsif @videos.any?
      @videos = @videos.sort_by(&:likes).reverse
    end
    respond_to do |format|
      format.js
      format.html
    end
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new videos_params
    if @video.save
      redirect_to new_video_video_track_path(@video), notice: 'Please add the first video track to complete your video creation'
    else
      render :new
    end
  end

  def show
    chosen_video_track     = params[:track_no] || 1
    # @current_video_tracks  = VideoTrack.where(video_id: @video.id, track_no: chosen_video_track)
    # if @current_video_tracks.any?
    #   @displayed_video_track = params[:video_track_version_id].present? ? VideoTrack.find(params[:video_track_version_id]) : @current_video_tracks.first
    #   @after_video_tracks    = VideoTrack.where(parent_id: @displayed_VideoTrack.id)
    # end
    #nadine
    if @video.video_tracks.any?
      @grouped_video_tracks = @video.video_tracks.group_by(&:track_no);
    end
  end

  def edit
  end

  def update
    @video.update videos_params
    if @video.save
      redirect_to videos_path, notice: 'video was successfully updated'
    else
      render :edit
    end
  end

  def like_video_track
    if @video_track.present?
      LikedVideoTrack.create(user_id: @user.id, video_track_id: @video_track.id)
    end
    respond_to do |format|
      format.js
    end
  end

  def unlike_video_track
    if @video_track.present?
      LikedVideoTrack.where(user_id: @user.id, video_track_id: @video_track.id).first.destroy
    end
    respond_to do |format|
      format.js
    end
  end

  def add_to_viewed_videos
    if @video_track.present?
      ViewedVideoTrack.create(user_id: @user.id, video_track_id: @video_track.id)
    end
    respond_to do |format|
      format.js
    end
  end

  def remove_from_viewed_videos
    if @video_track.present?
      ViewedVideoTrack.where(user_id: @user.id, video_track_id: @video_track.id).first.destroy
    end
    respond_to do |format|
      format.js
    end
  end

private
  def set_video
    @video = Video.find params[:id]
    if @video.video_tracks.any?
      @grouped_video_tracks = @video.video_tracks.group_by(&:track_no);
    end
  end

  def set_video_track_and_user
    @video_track = VideoTrack.find(params[:video_track_id])
    @user    = current_user
  end

  def authenticate_author
    @video = Video.find params[:id]
    if @video.user != current_user
      redirect_to root_path, alert: 'You are not authorized to do such an action'
    end
  end

private
  def videos_params
    params.require(:video).permit(
      :title,
      :cover_photo,
      :abstract,
      :user_id,
      :above_18,
      :genre_ids => []
    )
  end
end
