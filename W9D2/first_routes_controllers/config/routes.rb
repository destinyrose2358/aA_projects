Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :artworks, only: [:create, :update, :show, :destroy] do
    resources :comments, only: [:index]
    get '/likers', to: 'artworks#index_likers', as: 'artwork_likers'
  end
  resources :artwork_shares, only: [:create, :destroy]
  resources :users, only: [:create, :update, :show, :destroy, :index] do
    resources :comments, only: [:index]
    resources :artworks, only: [:index]
    get '/liked_artworks', to: 'users#index_liked_artworks', as: 'liked_artworks'
    get '/liked_comments', to: 'users#index_liked_comments', as: 'liked_comments'
  end
  resources :comments, only: [:create, :destroy]
  get 'comments/:comment_id/likers', to: 'comments#index_likers', as: 'comment_likers'
end
