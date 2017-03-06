Rails.application.routes.draw do
  scope "/api" do
    get "/users/total", to: "users#total"

    resources :plans
    resources :projects
    resources :users
    resources :teams
    resources :jobs
    resources :groups
    resources :depts
  end
end
