class ArtworksController < ApplicationController

    def create
    end

    def index
        render json: Artwork.all 
    end

    def destroy
    end

    def show
    end

    def update
    end

end