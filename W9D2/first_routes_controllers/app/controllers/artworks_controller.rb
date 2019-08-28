class ArtworksController < ApplicationController

    def index
        shared_artworks = User.find(params[:user_id]).shared_artworks
        authored_artworks = User.find(params[:user_id]).artworks
        render json: authored_artworks + shared_artworks
    end

    def create
        artwork = Artwork.new(artwork_params)
        if artwork.save
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        render json: Artwork.find(params[:id])
    end

    def update
        artwork = Artwork.find(params[:id])
        if artwork.update_attributes(artwork_params)
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        artwork = Artwork.find(params[:id])
        artwork.destroy
        render json: artwork
    end

    def index_likers
        likers = Artwork.find(params[:artwork_id]).likers
        render json: likers
    end

    private

    def artwork_params
        params.require(:artwork).permit(:title, :image_url, :artist_id)
    end

end