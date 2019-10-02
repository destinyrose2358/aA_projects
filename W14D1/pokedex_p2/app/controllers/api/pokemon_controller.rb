class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all 
    render :index
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render :errors, status: :unprocessable_entity
    end
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
    render :show
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, moves: [])
  end
end
