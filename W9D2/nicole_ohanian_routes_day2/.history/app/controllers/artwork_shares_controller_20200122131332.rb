class ArtworkSharesController < ApplicationController
  def create
    new_artwork_share = ArtworkShare.new(artwork_share_params)
    if new_artwork_share.save
      render json: new_artwork_share
    else
      render json: { errors: new_artwork_share.errors.full_messages }, status: 422
    end
  end

  def destroy
    artwork_share = ArtworkShare.find(params.require(:id))
    if artwork_share
      render json: artwork_share.destroy
    else
      render json: { errors: artwork_share.errors.full_messages }, status: 422
    end
  end

  private
  def artwork_share_params
    params.require(:artwork_share).permit(:artwork_id, :viewer_id)
  end
end