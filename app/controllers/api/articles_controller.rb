class Api::ArticlesController < ApplicationController

	def create
		@article = Article.new(article_params)
		@article.user_id = current_user.id

		if @article.save
			render :show
		else
			render json: @article.errors.full_messages
		end
	end

	def show
		@article.find(params[:id])
		render :show
	end

	def index
		@article = Article.all
		render :index
	end

	def destroy
	end

	def update
	end

	private

	def article_params
		params.require(:article).permit(:title, :body, :img_url)
	end
end
