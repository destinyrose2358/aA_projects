class CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)

    @comment.author_id = current_user.id
    if @comment.save
      redirect_to post_url(@comment.post_id)
    else
      flash.now[:erros] = ["EVERYTHING WENT WRONG!!!!!", @comment.errors.full_messages]
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:content, :post_id)
  end
end
