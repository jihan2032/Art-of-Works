Rails.application.routes.draw do
  devise_for :users
  resources  :users
  resources  :novels do
    resources  :chapters
    collection do
      patch :search
      patch :like_chapter
      patch :unlike_chapter
      patch :add_to_readings
      patch :remove_from_readings
    end
  end

  root to: 'novels#index'
end
