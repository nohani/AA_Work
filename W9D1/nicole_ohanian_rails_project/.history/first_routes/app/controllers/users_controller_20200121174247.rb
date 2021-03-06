class UsersController < ApplicationController
  def index
    render json: User.all
    # render plain: "I'm in the index action!"

  end

  def create
    user = User.new(params.require(:user).permit(:name, :email))
    user.save!
    render json: user
  end

  def show
    user = User.find(params.require(:id).permit(:id))
    render json: user 
  end
end