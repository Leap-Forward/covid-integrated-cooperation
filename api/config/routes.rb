Rails.application.routes.draw do
  resources :need_areas
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do 
    resources :need_categories
    resources :needs
    resources :initiatives
  end

end
