class Api::ArticlesController < ApplicationController

	def create
		@article = Article.new(article_params)
		@article.user_id = current_user.id

		if @article.save!
			# debugger
			# params[:step].each_with_index do |step,idx|
			# 	step.article_id = @article.id
			# 	step.ord = idx + 1
			# 	step.save!
			# end

			render :show
		else
			render json: @article.errors.full_messages
		end
	end

	def show
		@article = Article.find(params[:id])
		render :show
	end

	def index
		@articles = Article.all
		render :index
	end

	def destroy
	end

	def update
	end

	private

	def article_params
		params.require(:article).permit(:title,:img_url)
	end
end
