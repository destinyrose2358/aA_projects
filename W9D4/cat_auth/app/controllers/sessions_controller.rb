class SessionsController < ApplicationController
  before_action :redirect_if_logged_in, only: [:new, :create]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:user_name],
      params[:user][:password]
    )

    if @user
      login_user!
      flash[:success] = "Welcome back #{@user.user_name}!"
      redirect_to cats_url
    else
      flash.now[:error] = "Sorry, wrong user_name or password."
      render :new, status: 401
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    flash[:success] = "You logged out! HOOOOORRRRAAAYYY"
    redirect_to cats_url
  end
end