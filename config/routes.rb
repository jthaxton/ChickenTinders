Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy]
    resources :restaurants, only: [:index]
    resources :pending_interests, only: [:create, :destroy, :index]
  end
  root to: 'static_pages#root'
end
