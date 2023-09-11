Rails.application.routes.draw do
  # TODO: We'll start with static routes but move to RESTful routes soon
  scope controller: :static do
    get :home
    # get :about
    # get :projects
    # get :reviews
    # get :blog
    # get :contact
    # get :example_blog_post
  end
end
