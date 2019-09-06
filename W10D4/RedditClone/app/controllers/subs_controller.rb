class SubsController < ApplicationController
  before_action :require_sign_in

  def new
    @sub = Sub.new
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.moderator_id = current_user.id
    if @sub.save
      redirect_to sub_url(@sub.id)
    else
      flash.now[:errors] = sub.errors.full_messages
      render :new
    end
  end

  def show
    @sub = Sub.find_by(id: params[:id])
  end

  def index
    @subs = Sub.all
  end

  def edit
    @sub = current_user.subs.find_by(id: params[:id])
    if @sub
      render :edit
    else
      render plain: "Your mother was a hamster and your father smelt of elderberries!"
    end
  end

  def update
    @sub = current_user.subs.find_by(id: params[:id])
    if @sub.update(sub_params)
      redirect_to sub_url(@sub.id)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :edit
    end
  end

  private

  def sub_params
    params.require(:sub).permit(:title, :description)
  end
end
