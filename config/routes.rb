Rails.application.routes.draw do
  devise_for :users
  resources  :users do
    collection do
      patch :like_chapter
      patch :unlike_chapter
      patch :add_to_readings
      patch :remove_from_readings
    end
  end
  resources  :novels do
    resources  :chapters
    collection do
      get :search
    end
  end

  root to: 'novels#index'
end
