# == Schema Information
#
# Table name: videos
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  user_id     :integer
#  cover_photo :string(255)
#  abstract    :text(65535)
#  above_18    :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ActiveRecord::Base
  searchkick text_start: [:title]

  # Relations
  has_many   :video_tracks
  belongs_to :user
  has_and_belongs_to_many :genres, -> { uniq }

  # Scopes
  scope :has_tracks, -> { where(id: VideoTrack.pluck(:video_id).uniq) }

  # Validations
  validates :title, :genres, presence: true

  mount_uploader :cover_photo, videoCoverPhotoUploader

  # Pagination
  paginates_per 10

  # Methods
  def self.has_tracks
    Video.where(id: VideoTrack.where(track_no: 1).pluck(:video_id)) if VideoTrack.any?
  end

  def tracks_no
  end

  def likes
    likes = 0
    video_tracks.each do |video_track|
      likes = likes + video_track.likes
    end
    likes
  end

  def reads
    reads = 0
    video_tracks.each do |video_track|
      reads = reads + video_track.reads
    end
    reads
  end

  def author?(current_user)
    user == current_user
  end
end
