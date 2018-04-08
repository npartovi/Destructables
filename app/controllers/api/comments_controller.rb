class Api::CommentsController < ApplicationController

	def index
		@comments = Article.find(params[:article_id]).comments
	end

	def create
		@comment = Comment.new(comment_params)
		@comment.user = current_user
		@comment.article_id = params[:article_id]
		@comment.save!
	end

	def destroy
		@comment.find(params[:id])
		@comment.destroy
	end


	private

	def comment_params
		params.require(:comment).permit(:body)
	end
end
