Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
  	resources :users, only: [:create, :show, :index]
  	resource :session, only: [:create, :destroy]
  	resources :articles, only: [:show, :index, :create] do
  		resources :comments, only:[:create, :index]
  	end
  end

  resources :comments, only: [:destroy]

  root "static_pages#root"

  

end
