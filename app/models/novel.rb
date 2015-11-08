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
#

class Novel < ActiveRecord::Base
  # Relations
  has_many   :chapters
  belongs_to :user

  # Validations
  validates :title, presence: true

  mount_uploader :cover_photo, NovelCoverPhotoUploader


  # Methods
  def self.has_chapters
    Novel.where(id: Chapter.where(chapter_no: 1).pluck(:novel_id)) if Chapter.any?
  end

end
