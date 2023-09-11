Rails.application.routes.draw do
  # TODO: We'll start with static routes but move to RESTful routes soon
  scope controller: :static do
    get :about
    get :projects
    get :reviews
    get :blog
    get :contact
  end

  root "static#home", as: :home
end
