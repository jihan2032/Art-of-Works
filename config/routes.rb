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
    member do
      get :display_novel
    end
    resources  :chapters
  end

  root to: 'novels#index'
end
