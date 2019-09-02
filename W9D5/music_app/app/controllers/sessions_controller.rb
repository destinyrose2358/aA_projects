class SessionsController < ApplicationController
  
  def new
    @user = User.new
    render :new
  end

  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if user
      sign_in(user)
      redirect_to bands_url
    else
      flash[:errors] = "Sorry, wrong sign in info."
      redirect_to new_session_url, status: 302
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end

end