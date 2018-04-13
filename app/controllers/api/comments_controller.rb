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

	def update
	    @comment = Comment.find(params[:comment][:id])

	    if @comment.update_attributes(body: params[:comment][:comment])
	      render :show
	    else
	      render json: ["Can't edit this comment"], status: 404
	    end
  	end


	def destroy
		@comment = Comment.find(params[:id])
		@comment.destroy

		render json: @comment
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
