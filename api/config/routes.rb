Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :need_areas, only: %i[index show]  do 
  #   get 'categories', to: 'need_areas#categories'
  # end
  jsonapi_resources :need_areas, only: %i[index show] do
    jsonapi_related_resources :need_categories
  end
  jsonapi_resources :need_categories, only: %i[index show] do 
    jsonapi_related_resources :needs
  end
  jsonapi_resources :needs, only: %i[index show] 
  # resources :need_categories, only: %i[index show] 
  # resources :needs, only: %i[index show] 
  # resources :initiatives, only: %i[index show] 

end
