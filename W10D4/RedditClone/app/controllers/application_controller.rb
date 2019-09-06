class ApplicationController < ActionController::Base
    
    helper_method :current_user, :signed_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def signed_in?
        !!current_user
    end

    def sign_in(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
    end

    def sign_out
        current_user.try(:reset_session_token!)
        session[:session_token] = nil
    end

    private

    def require_sign_in
        unless signed_in?
            redirect_to new_session_url
        end
    end



end
