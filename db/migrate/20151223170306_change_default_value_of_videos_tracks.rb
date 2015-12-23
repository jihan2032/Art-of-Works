class ChangeDefaultValueOfVideosTracks < ActiveRecord::Migration
  def change
    change_column :video_tracks, :track_no,  :integer, default: 1
  end
end
