Rails.application.routes.draw do
  devise_for :users
  resources  :users do
    member do
      get :my_readings
      get :my_writings
      get :my_created_videos
      get :my_viewed_videos
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

  resources  :videos do
    resources  :video_tracks
    member do
      patch :like_video_track
      patch :unlike_video_track
      patch :add_to_viewed_videos
      patch :remove_from_viewed_videos
    end
  end

  root to: 'novels#index'
end
