# == Schema Information
#
# Table name: novels
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  user_id     :integer
#  category    :string(255)
#  cover_photo :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  abstract    :text(65535)
#  likes       :integer          default(0)
#  reads       :integer          default(0)
#  genre_id    :integer
#

class Novel < ActiveRecord::Base

  searchkick text_start: [:title]

  # Relations
  has_many   :chapters
  belongs_to :user
  belongs_to :genre

  # Validations
  validates :title, presence: true

  mount_uploader :cover_photo, NovelCoverPhotoUploader

  # Pagination
  paginates_per 10

  # Methods
  def self.has_chapters
    Novel.where(id: Chapter.where(chapter_no: 1).pluck(:novel_id)) if Chapter.any?
  end

  def tracks_no
  end

end
