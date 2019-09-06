Rails.application.routes.draw do
  get 'comments/new'
  get 'comments/create'
  resources :subs, except: [:destroy]
  resources :users, only: %i(new create)
  resource :session, only: %i(new create destroy)
  resources :posts, except: %i(index)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
