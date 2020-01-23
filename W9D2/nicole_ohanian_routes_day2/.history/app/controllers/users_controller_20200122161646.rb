class UsersController < ApplicationController
  def index
    debugger

    render json: User.all

  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: {errors: user.errors.full_messages}, status: 422
    end
  end

  def show 
    render json: user 
  end

  def update
    found = user
    if found.save
      found.update(user_params)
      render json: found
    else
      render json: found.errors.full_messages, status: 422
    end
  end

  def destroy
    render json: user.destroy
  end

  private
  def user
    User.find(params.require(:id))
  end

  def user_params
    params.require(:user).permit(:username)
  end
end