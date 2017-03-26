Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'application#index'

  resources :cities, except: [:edit, :new] do
    resources :places, except: [:edit, :new]
  end
end
