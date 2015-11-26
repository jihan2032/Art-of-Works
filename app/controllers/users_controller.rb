class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [ :show, :edit, :update, :add_to_readings, :remove_readings, :like_chapter, :unlike_chapter ]

  def show
  end

  def edit
  end

  def update
    @user.update users_params
    if @user.save
      redirect_to user_path(@user), notice: 'Profile was successfully updated'
    else
      render :edit
    end
  end

  def like_chapter
    if params[:chapter_id].present?
      chapter = Chapter.find(params[:chapter_id])
      @user.liked_chapters << chapter
      chapter.update_attribute(:likes, chapter.likes + 1)
    end
  end

  def unlike_chapter
    if params[:chapter_id].present?
      @user.liked_chapters.delete Chapter.find(params[:chapter_id])
      chapter.update_attribute(:likes, chapter.likes - 1) if chapter.likes > 0
    end
  end

  def add_to_readings
    if params[:chapter_id].present?
      @user.read_chapters << Chapter.find(params[:chapter_id])
      chapter.update_attribute(:reads, chapter.reads + 1)
    end
  end

  def remove_readings
    if params[:chapter_id].present?
      @user.read_chapters.delete Chapter.find(params[:chapter_id])
      chapter.update_attribute(:reads, chapter.reads - 1) if chapter.reads > 0
    end
  end

private
  def set_user
    @user = current_user
  end

private
  def users_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :profile_picture,
      :mobile_number
    )
  end
end
