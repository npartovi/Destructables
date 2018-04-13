Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
  	resources :users, only: [:create, :show, :index]
  	resource :session, only: [:create, :destroy]
  	resources :articles, only: [:show, :index, :create] do
      resource :favorite, only: [:create,:destroy]
  		resources :comments, only:[:create, :index]
      resources :steps, only: [:index]
  	end
    resources :steps, except: [:new, :edit, :index]
    resources :comments, only: [:destroy, :show, :update]
    resources :searches, only: [:index]

  end

  root "static_pages#root"

end
