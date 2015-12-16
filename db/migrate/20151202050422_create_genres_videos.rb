class CreateGenresVideos < ActiveRecord::Migration
  def change
    create_table :genres_videos do |t|
      t.integer :genre_id
      t.integer :video_id
    end
  end
end
