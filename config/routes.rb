Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
  	resources :users, only: [:create, :show, :index]
  	resource :session, only: [:create, :destroy]
  	resources :articles, only: [:show, :index, :create] do
  		resources :comments, only:[:create, :index]
      resources :steps, only: [:index]
  	end
  end

  resources :comments, only: [:destroy]
  resources :steps, except: [:new, :edit, :index]

  root "static_pages#root"

end
