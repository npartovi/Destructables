class Api::SearchesController < ApplicationController

	def index
		@articles = Article.top_five_search(search_params[:query])
		render :index
	end

  	def search_params
    	params.require(:search).permit(:query, :article_id)
  	end



end
