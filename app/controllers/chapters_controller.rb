class ChaptersController < ApplicationController
  before_action :authenticate_user!, only: [:new, :edit, :update]
  before_action :set_chapter, only: [ :show, :edit, :update ]
  before_action :set_novel, only: [ :show, :edit, :update ]

  def show
  end

  def edit
  end

  def update
    @chapter.update chapters_params
    if @chapter.save
      redirect_to chapters_path, notice: 'Chapter was successfully updated'
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
      :novel_id
    )
  end

end
