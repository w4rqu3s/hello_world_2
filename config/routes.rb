Rails.application.routes.draw do
  root "chats#index"

  resources :chats, only: [ :index, :show, :create ]

  mount ActionCable.server => "/cable"
end
