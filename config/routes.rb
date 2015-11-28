Rails.application.routes.draw do
  devise_for :users
  resources  :users do
    member do
      get :my_readings
      get :my_writings
    end
  end
  resources  :novels do
    resources  :chapters
    collection do
      patch :search
    end
    member do
      patch :like_chapter
      patch :unlike_chapter
      patch :add_to_readings
      patch :remove_from_readings
    end
  end

  root to: 'novels#index'
end
