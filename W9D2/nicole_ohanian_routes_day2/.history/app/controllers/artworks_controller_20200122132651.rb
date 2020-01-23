class ArtworksController < ApplicationController

    def create
      new_artwork = Artwork.new(artwork_params)
      if new_artwork.save
        render json: new_artwork
      else
        render json: {errors: new_artwork.errors.full_messages}, status: 422
      end
    end

    def index
        artworks = []
        user = User.find(params.require(:user_id))
        artworks.concat(user.shared_artworks, user.artworks)
        render json: artworks
    end

    def destroy
      render json: artwork.destroy
    end

    def show
      render json: artwork
    end

    def update
      found = artwork
      if found
        found.update(artwork_params)
        render json: found
      else 
        render json: {errors: found.errors.full_messages}, status: 422
      end
    end

    private

    def artwork_params
        params.require(:artwork).permit(:artist_id, :title)
    end

    def artwork
        Artwork.find(params.require(:id))
    end
end