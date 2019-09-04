class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "Welcome to the party, you loser"
      redirect_to user_url(@user.id)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user.destroy
      flash[:success] = "#{ user.username } deleted! Later loser!"
    else
      flash[:error] = "That user could not be found"
    end
    
    redirect_to new_user_url
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
