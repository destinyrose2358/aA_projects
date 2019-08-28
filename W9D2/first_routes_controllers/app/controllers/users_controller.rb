class UsersController < ApplicationController
  def index
    if params[:username]
      users = User.where("username ILIKE '%#{params[:username]}%'")
    else
      users = User.all
    end
    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    render json: User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_params)
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user
  end

  def index_liked_artworks
    liked_artworks = User.find(params[:user_id]).liked_artworks
    render json: liked_artworks
  end

  def index_liked_comments
    liked_comments = User.find(params[:user_id]).liked_comments
    render json: liked_comments
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end
    
end