class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [ :show, :edit, :update ]

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
      @user.liked_chapters << Chapter.find(params[:chapter_id])
    end
  end

  def unlike_chapter
    if params[:chapter_id].present?
      @user.liked_chapters.delete Chapter.find(params[:chapter_id])
    end
  end

  def add_to_readings
    if params[:chapter_id].present?
      @user.read_chapters << Chapter.find(params[:chapter_id])
    end
  end

  def remove_readings
    if params[:chapter_id].present?
      @user.read_chapters.delete Chapter.find(params[:chapter_id])
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
