class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = ['Successfully created user!']
      redirect_to cats_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:user_name, :session_token, :password)
  end
end