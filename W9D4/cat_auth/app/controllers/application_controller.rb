class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login_user!
    session[:session_token] = @user.reset_session_token!
    nil
  end

  private

  def redirect_if_logged_in
    if logged_in?
      flash[:notice] = "Stop right meow! You're already logged in."
      redirect_to cats_url
    end
  end
end
