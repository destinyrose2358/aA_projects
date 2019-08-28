class LikesController < ApplicationController
  def create
    like = Like.new(likes_params) 
    if likes.save
      render json: like
    else
      render json: likes.errors.full_messages
    end
  end

  def destroy
    like = Like.find(params[:id])
    like.destroy 
    render json: like
  end   

  private

  def likes_params
    params.require(:like).permit(:liker_id, :likeable_type, :likeable_id)
  end
end 