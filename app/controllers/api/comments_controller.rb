class Api::CommentsController < ApplicationController

	def index
		@comments = Article.find(params[:article_id]).comments
	end

	def create
		@comment = Comment.new(comment_params)
		@comment.user = current_user
		@comment.article_id = params[:article_id]
		@comment.save!

		render :show
	end

	def destroy
		@comment = Comment.find(params[:id])
		@comment.destroy

		render :show
	end

	def show
		@comment = Comment.find(params[:id])
		render :show
	end


	private

	def comment_params
		params.require(:comment).permit(:body)
	end


end
