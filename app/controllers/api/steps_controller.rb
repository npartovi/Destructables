class Api::StepsController < ApplicationController

	def index
		@steps = Article.find(params[:article_id]).steps
	end

	def create
		@step = Step.new(step_params)
		@step.article_id = params[:article_id]
		@step.save!
	end


	private

	def step_params
		params.require(:step).permit(:title, :body)
	end

	
end
