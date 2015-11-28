class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [ :show, :edit, :update, :my_readings, :my_writings ]

  def show
    @novels = @user.read_novels
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

  def my_readings
    @novels = @user.read_novels.page params[:page]
  end

  def my_writings
    @novels = @user.novels.page params[:page]
  end

private
  def set_user
    @user = User.find params[:id]
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
