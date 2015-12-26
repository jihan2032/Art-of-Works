class NovelsController < ApplicationController
  before_action :authenticate_user!, only: [ :new, :edit, :update ]
  before_action :authenticate_author, only: [:edit, :update]
  before_action :set_novel, only: [ :show, :edit, :update, :add_to_readings, :remove_from_readings, :like_chapter, :unlike_chapter ]
  before_action :set_chapter_and_user, only: [ :add_to_readings, :remove_from_readings, :like_chapter, :unlike_chapter ]

  def index
    if params[:filter].present?
      if params[:filter] == 'random'
        @novels = Novel.has_chapters.page params[:page]
      elsif params[:filter] == 'recent'
        @novels = Novel.has_chapters.order(updated_at: :desc).page params[:page]
      end
    else
      @novels = Kaminari.paginate_array(Novel.has_chapters.sort_by(&:likes).reverse).page params[:page]
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
      # if Genre.pluck(:name).include? keyword.downcase
      #   @novels = Genre.where(name: keyword.downcase).first.novels
      #   @genre = Genre.where(name: keyword.downcase).first
      # else
      #   # search by title
      #   @novels = Novel.has_chapters.search(keyword)
      #   if @novels.any?
      #   # search by author
      #   elsif User.search(keyword).any?
      #     @authors = User.search(keyword)
      #     @novels  = Novel.has_chapters.where(user_id: @authors.results.map(&:id))
      #   end
      # end
    # else #nothing in the search box
      @novels = Novel.has_chapters
    end
    # Genre filter
    novels = Novel.where(id: nil)
    genre_filter = false
    Genre.all.each do |genre|
      if params["#{genre.id}"].present?
        genre_filter = true
        novels = novels + genre.novels
      end
    end
    @novels = @novels & novels if genre_filter
    # sorting novels after search
    if params[:filter].present? && params[:filter] == 'recent'
      @novels = @novels.sort_by(&:created_at).reverse
    elsif @novels.any?
      @novels = @novels.sort_by(&:likes).reverse
    end
    respond_to do |format|
      format.js
      format.html
    end
  end

  def new
    @novel = Novel.new
  end

  def create
    @novel = Novel.new novels_params
    if @novel.save
      redirect_to new_novel_chapter_path(@novel), notice: 'Please write the first chapter to complete your novel creation'
    else
      render :new
    end
  end

  def show
    chosen_chapter     = params[:chapter_no] || 1
    @current_chapters  = Chapter.where(novel_id: @novel.id, chapter_no: chosen_chapter)
    if @current_chapters.any?
      @displayed_chapter = params[:chapter_version_id].present? ? Chapter.find(params[:chapter_version_id]) : @current_chapters.first
      @after_chapters    = Chapter.where(parent_id: @displayed_chapter.id)
    end
    #nadine
    if @novel.chapters.any?
      @grouped_chapters = @novel.chapters.group_by(&:chapter_no);
    end
  end

  def edit
  end

  def update
    @novel.update novels_params
    if @novel.save
      redirect_to novels_path, notice: 'novel was successfully updated'
    else
      render :edit
    end
  end

  def like_chapter
    unless current_user
      flash[:alert] = 'please login first'
    end
    if @chapter.present? && current_user
      LikedChapter.create(user_id: @user.id, chapter_id: @chapter.id)
    end
    respond_to do |format|
      format.js
    end
  end

  def unlike_chapter
    unless current_user
      flash[:alert] = 'please login first'
    end
    if @chapter.present? && current_user
      LikedChapter.where(user_id: @user.id, chapter_id: @chapter.id).first.destroy
    end
    respond_to do |format|
      format.js
    end
  end

  def add_to_readings
    unless current_user
      flash[:alert] = 'please login first'
    end
    if @chapter.present? && current_user
      ReadChapter.create(user_id: @user.id, chapter_id: @chapter.id)
    end
    respond_to do |format|
      format.js
    end
  end

  def remove_from_readings
    unless current_user
      flash[:alert] = 'please login first'
    end
    if @chapter.present? && current_user
      ReadChapter.where(user_id: @user.id, chapter_id: @chapter.id).first.destroy
    end
    respond_to do |format|
      format.js
    end
  end

private
  def set_novel
    @novel = Novel.find params[:id]
    if @novel.chapters.any?
      @grouped_chapters = @novel.chapters.group_by(&:chapter_no);
    end
  end

  def set_chapter_and_user
    @chapter = Chapter.find(params[:chapter_id])
    @user    = current_user
  end

  def authenticate_author
    @novel = Novel.find params[:id]
    if @novel.user != current_user
      redirect_to root_path, alert: 'You are not authorized to do such action'
    end
  end

private
  def novels_params
    params.require(:novel).permit(
      :title,
      :cover_photo,
      :abstract,
      :user_id,
      :above_18,
      :genre_ids => []
    )
  end
end
