class ArtworksController < ApplicationController

    def create
        new_artwork = Artwork.new(artwork_params)
        if new_artwork.save
            render json: new_artwork
        else
            render json: new_artwork.errors.full_messages
        end
    end

    def index
        render json: Artwork.all 
    end

    def destroy
        render json: artwork.destroy
    end

    def show
        render json: artwork
    end

    def update
        if artwork
            artwork.update(artwork_params)
            render json: artwork 
        else 
            render json: {errors: artwork.errors.full_messages}, status: 422
    end

    private

    def artwork_params
        params.require(:artwork).permit(:artist_id, :title)
    end

    def artwork
        Artwork.find(params.require(:id))
    end
end