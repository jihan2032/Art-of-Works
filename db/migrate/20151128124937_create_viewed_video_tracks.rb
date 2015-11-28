class CreateViewedVideoTracks < ActiveRecord::Migration
  def change
    create_table :viewed_video_tracks do |t|
      t.integer :user_id
      t.integer :video_track_id

      t.timestamps null: false
    end
  end
end
