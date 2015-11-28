class VideoTracksController < ApplicationController
  before_action :authenticate_user!, only: [:new, :edit, :update]
  before_action :set_video_track, only: [ :show, :edit, :update ]
  before_action :set_video, only: [ :show, :edit, :update, :new ]

  def new
    @video_track = VideoTrack.new
    session[:parent_video_track_id] = params[:parent_video_track_id]
  end

  def create
    @video_track = VideoTrack.new video_tracks_params
    if session[:parent_video_track_id].present? && session[:parent_video_track_id] != '0'
      parent                = VideoTrack.find session[:parent_video_track_id]
      @video_track.parent   = parent
      @video_track.track_no = parent.track_no + 1
      session.delete(:parent_video_track_id)
    end
    if @video_track.save
      redirect_to video_path(@video_track.video.id, video_track_no: @video_track.track_no, video_track_version_id: @video_track.id), notice: 'Video track was successfully created.'
    else
      @video = video.find params[:video_id]
      render :new
    end
  end

  def show
    @video_track = video_track.find params[:id]
  end

  def edit
  end

  def update
    @video_track.update video_tracks_params
    if @video_track.save
      redirect_to video_path(@video_track.video.id, video_track_no: @video_track.track_no, video_track_version_id: @video_track.id), notice: 'video_track was successfully updated.'
    else
      render :edit
    end
  end

private
  def set_video_track
    @video_track = VideoTrack.find params[:id]
  end

  def set_video
    @video = Video.find params[:video_id]
  end

private
  def video_tracks_params
    params.require(:video_track).permit(
      :title,
      :video_id,
      :track_no,
      :parent_id,
      :user_id,
      :link_url
    )
  end

end
