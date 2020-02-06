Rails.application.routes.draw do
  resources :bands
  resources :users, only: [:create, :new, :show]
  resource :session, only: [:create, :destroy, :new]
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
