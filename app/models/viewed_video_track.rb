# == Schema Information
#
# Table name: viewed_video_tracks
#
#  id             :integer          not null, primary key
#  user_id        :integer
#  video_track_id :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class ViewedVideoTrack < ActiveRecord::Base
  # Relations
  belongs_to :user
  belongs_to :video_track
end
