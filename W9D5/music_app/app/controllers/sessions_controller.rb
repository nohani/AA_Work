class SessionsController < ApplicationController
  
  before_action :ensure_logged_in, only: [:destroy]

  def create
    email = params[:user][:email]
    password = params[:user][:password]
    @user = User.find_by_credentials(email, password)

    if @user
      login(@user)
      flash.now[:success] = ['You successfully logged in!']
      render :new
    else
      flash.now[:errors] = ['Invalid password/email password']
      render :new
    end
  end

  def new
    render :new
  end

  def destroy
    logout
    redirect_to new_session_url
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end