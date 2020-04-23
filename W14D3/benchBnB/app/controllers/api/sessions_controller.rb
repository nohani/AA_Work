class Api::SessionsController < ApplicationController
    
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login(@user)
            render :show
        else
            render json: 'Username/Password did not match'
        end
    end

    def destroy
        if current_user
            self.logout
            render json: {}
        else
            render json: "Could not log out", status: 404
        end
    end

end