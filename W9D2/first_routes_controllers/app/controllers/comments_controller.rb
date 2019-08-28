class CommentsController < ApplicationController
  def index
    comments = Comment.all
    comments = comments.where(commenter_id: params[:user_id]) if params[:user_id]
    comments = comments.where(artwork_id: params[:artwork_id]) if params[:artwork_id]
    render json: comments
  end

  def create
    comment = Comment.new(comment_params) 
    if comment.save
      render json: comment 
    else
      render json: comment.errors.full_messages
    end 
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end

  def index_likers
      likers = Comment.find(params[:comment_id]).likers
      render json: likers
  end

  private

  def comment_params
    params.require(:comment).permit(:commenter_id, :artwork_id, :body)
  end

end