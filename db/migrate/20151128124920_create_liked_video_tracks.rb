class CreateLikedVideoTracks < ActiveRecord::Migration
  def change
    create_table :liked_video_tracks do |t|
      t.integer :user_id
      t.integer :video_track_id

      t.timestamps null: false
    end
  end
end
