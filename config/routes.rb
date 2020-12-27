Rails.application.routes.draw do
  root to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/tutorial', to: 'home#index'
  get '/quiz', to: 'home#index'
  get '/result', to: 'home#index'
end
