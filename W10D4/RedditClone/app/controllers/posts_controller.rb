class PostsController < ApplicationController
  before_action :require_sign_in
  
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      redirect_to post_url(@post.id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def edit
    @post = current_user.posts.find_by(id: params[:id])
    if @post
      render :edit
    else
      render plain: "Nobody expects the Spanish Inquisition!!!"
    end
  end

  def update
    @post = Post.find_by(params[:id])
    @post.author_id = current_user.id
    if @post.update(post_params)
      redirect_to post_url(@post.id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def destroy
    post = current_user.posts.find_by(id: params[:id])
    post.destroy
    redirect_to sub_url(post.sub.id)
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [])
  end
end
