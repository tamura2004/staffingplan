Rails.application.routes.draw do
  resources :plans
  resources :projects
  resources :users
  resources :teams
  resources :jobs
  resources :groups
  resources :depts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
