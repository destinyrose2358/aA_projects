class TracksController < ApplicationController
  before_action :require_sign_in
  
  def new
    @track = Track.new
    render :new
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      redirect_to track_url(@track.id)
    else
      flash.now[:errors] = "Something went wrong, see below:"
      render :new
    end
  end

  def edit
    @track = Track.find(params[:id])
    render :edit
  end

  def show
    @track = Track.includes(notes: :user).find(params[:id])
    if @track
      render :show
    else
      flash[:errors] = "Stop that!"
      redirect_to bands_url
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      redirect_to track_url(@track.id)
    else
      flash.now[:errors] = "Sorry, you messed up!"
      render :edit
    end
  end

  def destroy
    track = Track.find(params[:id])
    track.destroy
    redirect_to album_url(track.album_id)
  end

  private

  def track_params
    params.require(:track).permit(:album_id, :title, :ord, :lyrics, :track_type)
  end
end
