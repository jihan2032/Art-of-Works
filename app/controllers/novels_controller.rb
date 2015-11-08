class NovelsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :edit, :update]
  before_action :set_novel, only: [ :show, :edit, :update, :display_novel ]

  def index
    @novels = Novel.order(likes: :desc)
  end

  def new
    @novel = Novel.new
  end

  def create
    @novel = Novel.new novels_params
    if @novel.save
      current_user.novels << @novel
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
    @novel = novel.find params[:id]
  end

private
  def novels_params
    params.require(:novel).permit(
      :title,
      :cover_photo,
      :abstract
    )
  end
end
