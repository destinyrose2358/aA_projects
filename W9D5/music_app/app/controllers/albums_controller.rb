class AlbumsController < ApplicationController
  before_action :require_sign_in

  def new
    @album = Album.new(band_id: params[:band_id])
    render :new
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      redirect_to album_url(@album.id)
    else
      flash.now[:errors] = "Sorry, you messed up!"
      render :new
    end
  end

  def edit
    @album = Album.find(params[:id])
    render :edit
  end

  def update
    @album = Album.find(params[:id])
    if @album.update(album_params)
      redirect_to album_url
    else
      flash.now[:errors] = "Sorry, something went wrong, see below:"
      render :edit
    end
  end

  def destroy
    album = Album.find(params[:id])
    album.delete
    redirect_to band_url(album.band_id)
  end

  def show
    @album = Album.includes(:tracks).find(params[:id])
    if @album
      render :show
    else
      flash[:errors] = "Stop That!"
      redirect_to bands_url
    end
  end

  private

  def album_params
    params.require(:album).permit(:year, :band_id, :title, :recording_type)
  end

end