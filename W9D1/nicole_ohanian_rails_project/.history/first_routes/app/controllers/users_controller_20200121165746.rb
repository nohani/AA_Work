class UsersController < ApplicationController
  def index
    render json: "I'm in the index action!"
  end
end