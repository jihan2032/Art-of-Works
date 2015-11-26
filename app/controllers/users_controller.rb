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
      LikedChapter.create(user_id: @user.id, chapter_id: chapter.id)
    end
  end

  def unlike_chapter
    if params[:chapter_id].present?
      LikedChapter.where(user_id: @user.id, chapter_id: chapter.id).first.destroy
    end
  end

  def add_to_readings
    if params[:chapter_id].present?
      ReadChapter.create(user_id: @user.id, chapter_id: chapter.id)
    end
  end

  def remove_readings
    if params[:chapter_id].present?
      ReadChapter.where(user_id: @user.id, chapter_id: chapter.id).first.destroy
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
