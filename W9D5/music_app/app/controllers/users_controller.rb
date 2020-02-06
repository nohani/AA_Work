class UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user 
      login(@user)
      flash.now[:success] = ['You created an account and logged in!']
      render :new
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    render :new
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end