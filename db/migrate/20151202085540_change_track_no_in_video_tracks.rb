class ChangeTrackNoInVideoTracks < ActiveRecord::Migration
  def change
    change_column :video_tracks, :track_no, :integer, default: 0
  end
end
