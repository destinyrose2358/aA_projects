class UsersController < ApplicationController
  before_action :redirect_if_logged_in

  def new
      @user = User.new
      render :new
  end

  def create
      @user = User.new(user_params)

      if @user.save
        flash[:success] = "Welcome to 99 cats! Shame on all of us!"
        login_user!
        redirect_to cats_url
      else
        flash.now[:error] = "Registration failed. See below for details:"
        render :new, status: :unprocessable_entity
      end
  end

  private

  def user_params
      params.require(:user).permit(:user_name, :password)
  end
end