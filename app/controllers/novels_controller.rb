class NovelsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :edit, :update]
  before_action :set_novel, only: [ :show, :edit, :update ]

  def index
    if params[:filter].present?
      if params[:filter] == 'random'
        @novels = Novel.page params[:page]
      elsif params[:filter] == 'recent'
        @novels = Novel.order(updated_at: :desc).page params[:page]
      end
    else
      @novels = Novel.order(likes: :desc).page params[:page]
    end
    respond_to do |format|
      format.js
      format.html
    end
  end

  def search
    keyword = params[:search]
    keyword_type = 'title'
    keyword_type = 'author'
    if keyword.present?
      # search by genre
      if Genre.pluck(:name).include? keyword.downcase
        @novels = Genre.where(name: keyword.downcase).first.novels
        @genre = true
      else
        # search by title
        @novels = Novel.search(keyword)
        if @novels.any?
          @title = true
        # search by author
        elsif User.search(keyword).any?
          @authors = User.search(keyword)
          @novels  = Novel.where(user_id: @authors)
          @author  = true
        end
      end
    end
    # Genre filter
    if params[:genre].present?

    end
    # sorting novels after search
    if params[:filter].present?
      if params[:filter] == 'random'
        @novels = @novels.page params[:page]
      elsif params[:filter] == 'recent'
        @novels = @novels #.order(updated_at: :desc).page params[:page]
      end
    elsif @novels.any?
      @novels = @novels#.order(likes: :desc).page params[:page]
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
      redirect_to novel_path(@novel), notice: 'Novel was successfully created.'
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

private
  def set_novel
    @novel = Novel.find params[:id]
  end

private
  def novels_params
    params.require(:novel).permit(
      :title,
      :cover_photo,
      :abstract,
      :user_id
    )
  end
end
