class BandsController < ApplicationController
  before_action :require_sign_in

  def index
    @bands = Band.all
    render :index
  end

  def show
    @band = Band.includes(:albums).find(params[:id])
    render :show
  end

  def new
    render :new
  end

  def create
    @band = Band.new(band_params)
    if @band.save
      redirect_to band_url(@band.id)
    else
      flash.now[:errors] = "Sorry, that band already exists!"
      render :new
    end
  end

  def edit
    @band = Band.find(params[:id])
    if @band
      render :edit
    else
      flash[:errors] = "Sorry that band doesn't exist"
      redirect_to bands_url, status: :unprocessable_entity
    end
  end

  def update
    @band = Band.find(params[:id])
    if @band.update(band_params)
      redirect_to band_url(@band.id)
    else
      flash.now[:errors] = "Eh, that seems like copyright infringement..."
      render :edit
    end
  end

  def destroy
    band = Band.find(params[:id])
    band.destroy
    redirect_to bands_url
  end

  private

  def band_params
    params.require(:band).permit(:name)
  end
end