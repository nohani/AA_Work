class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      user.errors.full_messages
    end
  end

  def show 
    render json: user 
  end

  def update
    user.update(user_params)
  end

  def destroy
    user.destroy
  end

  private
  def user
    User.find(params.require(:id))
  end

  def user_params
    params.require(:username)
  end
end