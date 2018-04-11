class Api::StepsController < ApplicationController

	def index
		@steps = Article.find(params[:article_id]).steps
	end

	def create

		@step = Step.new(step_params)

		if @step.save
			render :show
		else
			render json: @step.errors.full_messages, status: 422
		end
	end

	def show
    	@step = Step.find(params[:id])
  	end

  	def destroy
    	@step = Step.find(params[:id])
    	@step.destroy
  	end


	private

	def step_params
		debugger
		params.require(:step).permit(:title, :body, :ord, :article_id, :step_img)
	end

	
end
