class UsersController < ApplicationController


  def new
    @user = User.new
    render :new
  end

  def show
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      flash[:success] = "Welcome to the party! #{current_user.email}"
      redirect_to bands_url
    else
      flash.now[:errors] = "Invalid Account details, see below:"
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end