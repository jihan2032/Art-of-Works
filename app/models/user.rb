# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  first_name             :string(255)
#  last_name              :string(255)
#  mobile_number          :string(255)
#  title                  :string(255)
#  profile_picture        :string(255)
#  user_name              :string(255)
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  # Relations
  has_many :novels
  has_many :videos
  has_many :chapters
  has_many :video_tracks
  has_many :read_chapters
  has_many :liked_chapters
  has_many :viewed_video_tracks
  has_many :liked_video_tracks
  # has_many :read_novels, through: :read_chapters
  # has_many :viewed_videos, through: :viewed_video_tracks, class_name: 'Video'

  # Validations
  validates :user_name, presence: true

  mount_uploader :profile_picture, ProfilePictureUploader

  # searchkick text_start: [:first_name, :last_name, :user_name]

  # Methods
  def name
    "#{user_name.titleize}"
  end

  def read_novels
    Novel.where(id: Chapter.where(id: read_chapters.pluck(:chapter_id)).pluck(:novel_id))
  end

  def viewed_videos
    Video.where(id: VideoTrack.where(id: viewed_video_tracks.pluck(:video_track_id)).pluck(:video_id))
  end

  def like_chapter?(chapter)
    LikedChapter.where(user_id: id, chapter_id: chapter.id).any?
  end

  def read_chapter?(chapter)
    ReadChapter.where(user_id: id, chapter_id: chapter.id).any?
  end

  def last_read_chapter(novel)
    (novel.chapters & Chapter.where(id: read_chapters.pluck(:chapter_id))).last
  end

  def last_viewed_track(video)
    (video.video_tracks & VideoTrack.where(id: viewed_video_tracks.pluck(:video_track_id))).last
  end

  # def viewed_videos
  #   Video.where(id: VideoTrack.where(id: viewed_video_tracks.pluck(:video_track_id)).pluck(:video_id))
  # end

  def like_video_track?(track)
    LikedVideoTrack.where(user_id: id, video_track_id: track.id).any?
  end

  def viewed_video_track?(track)
    ViewedVideoTrack.where(user_id: id, video_track_id: track.id).any?
  end

end
