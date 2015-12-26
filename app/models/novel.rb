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
#  genre_id    :integer
#  above_18    :boolean          default(FALSE)
#

class Novel < ActiveRecord::Base

  # searchkick text_start: [:title]

  # Relations
  has_many   :chapters
  belongs_to :user
  has_and_belongs_to_many :genres, -> { uniq }

  # Scopes
  scope :has_chapters, -> { where(id: Chapter.pluck(:novel_id).uniq) }

  # Validations
  validates :title, :genres, presence: true

  mount_uploader :cover_photo, NovelCoverPhotoUploader

  # Pagination
  paginates_per 10

  # Methods
  def self.has_chapters
    Novel.where(id: Chapter.where(chapter_no: 1).pluck(:novel_id)) if Chapter.any?
  end

  def tracks_no
  end

  def likes
    likes = 0
    chapters.each do |chapter|
      likes = likes + chapter.likes
    end
    likes
  end

  def reads
    reads = 0
    chapters.each do |chapter|
      reads = reads + chapter.reads
    end
    reads
  end

  def author?(current_user)
    user == current_user
  end

end
