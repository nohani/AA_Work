class LikesController < ApplicationController
  def index

  end

  def create
    like = Like.new

    # like.liker_id = params.require(:liker_id)
    like.liker_id = like_params[:liker_id]

    if params.has_key?(:comment_id)
      like.likeable_type = "Comment"
      like.likeable_id = like_params[:comment_id]
    elsif params.has_key?(:artwork_id)
      like.likeable_type = "Artwork"
      like.likeable_id = like_params[:artwork_id]
    end

    if like.save 
      render json: like
    else
      render json: like.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private
  def like_params
    params.require(:like).permit(:liker_id, :comment_id, :artwork_id)
  end
end

# POST @ /comments/5/likes?like[liker_id]=4
# POST @ /artwork/6/likes?like[liker_id]=4