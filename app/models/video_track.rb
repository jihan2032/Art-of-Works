# == Schema Information
#
# Table name: video_tracks
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  track_no   :integer
#  parent_id  :integer
#  video_id   :integer
#  user_id    :integer
#  abstract   :text(65535)
#  link_url   :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class VideoTrack < ActiveRecord::Base
  # Relations
  has_many   :liked_video_tracks
  has_many   :viewed_video_tracks
  belongs_to :video
  belongs_to :user
  belongs_to :parent, class_name: 'VideoTrack'
  has_many   :children, class_name: 'VideoTrack', foreign_key: 'parent_id'


  # Validations
  validates :title, :link_url, presence: true

  # Methods
  def reads
    ViewedVideoTrack.where(video_track_id: id).count
  end

  def likes
    LikedVideoTrack.where(video_track_id: id).count
  end
end
