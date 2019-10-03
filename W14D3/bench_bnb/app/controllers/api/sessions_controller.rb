class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(username: user_params[:username]).try(:authenticate, user_params[:password])

    if @user && log_in(@user)
      render :create, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if sign_out(current_user)
      render json: {}
    else
      render json: ["you can't sign out if you're not logged in, idiot"], status: 404
    end
  end

  private
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
