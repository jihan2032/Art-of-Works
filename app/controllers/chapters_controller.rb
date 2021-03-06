class ChaptersController < ApplicationController
  before_action :authenticate_user!, only: [:new, :edit, :update]
  before_action :set_chapter, only: [ :show, :edit, :update ]
  before_action :set_novel, only: [ :show, :edit, :update, :new ]

  def new
    @chapter = Chapter.new
    session[:parent_chapter_id] = params[:parent_chapter_id]
    @chapter.parent = Chapter.find session[:parent_chapter_id] if params[:parent_chapter_id].present?
  end

  def create
    @chapter = Chapter.new chapters_params
    @chapter.content = ActionController::Base.helpers.strip_tags(params[:chapter][:content]) if params[:chapter][:content]
    if session[:parent_chapter_id].present? && session[:parent_chapter_id] != '0'
      parent              = Chapter.find session[:parent_chapter_id]
      @chapter.parent     = parent
      @chapter.chapter_no = parent.chapter_no + 1
      session.delete(:parent_chapter_id)
    end
    if @chapter.save
      redirect_to novel_path(@chapter.novel.id, chapter_no: @chapter.chapter_no, chapter_version_id: @chapter.id), notice: 'Chapter was successfully created.'
    else
      @novel = Novel.find params[:novel_id]
      render :new
    end
  end

  def show
    @chapter = Chapter.find params[:id]
  end

  def edit
  end

  def update
    @chapter.update chapters_params
    if @chapter.save
      redirect_to novel_path(@chapter.novel.id, chapter_no: @chapter.chapter_no, chapter_version_id: @chapter.id), notice: 'Chapter was successfully updated.'
    else
      render :edit
    end
  end

private
  def set_chapter
    @chapter = Chapter.find params[:id]
  end

  def set_novel
    @novel = Novel.find params[:novel_id]
  end

private
  def chapters_params
    params.require(:chapter).permit(
      :title,
      :novel_id,
      :chapter_no,
      :parent_id,
      :user_id,
      :content
    )
  end

end
