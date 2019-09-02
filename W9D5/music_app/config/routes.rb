Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  resources :bands do
    resources :albums, only: [:new]
  end
  resources :albums, except: [:new, :index] do
    resources :tracks, only: [:new]
  end
  resources :tracks, except: [:new, :index] do
    resources :notes, only: [:create]
  end
  resources :notes, only: [:destroy]
end
