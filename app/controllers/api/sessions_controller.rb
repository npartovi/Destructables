class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(
			params[:user][:username],
			params[:user][:password]
		)

		if @user
			login(@user)
			render '/api/users/show'
		else
			render json: @user.errors.full_messages
		end
	end

	def destroy
		if current_user
			logout
			render json: {message: "Logout was successful"}
		else
			render json: current_user.errors.full_messages
		end
	end
end
