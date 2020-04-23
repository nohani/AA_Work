class ApplicationController < ActionController::Base

    helper_method :current_user

    def current_user
        return nil unless session[:session_token]
        @user ||= User.find_by(session_token: session[:session_token])
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout
        current_user.session_token = current_user.reset_session_token!
        session[:session_token] = nil
    end
end
