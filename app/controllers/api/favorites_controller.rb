class Api::FavoritesController < ApplicationController

	def create
		@favorite = Favorite.new
		@favorite.user_id = current_user.id
		@favorite.article_id = params[:article_id]
		@favorite.save!
	end

	def destroy
		favorite_article = current_user.articles.find(params[:article_id])
		favorite = favorite_article.favorites.find_by(user_id: params[:user_id])
		favorite.destroy!
	end
end
