# == Schema Information
#
# Table name: chapters
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  chapter_no :integer          default(1)
#  parent_id  :integer          default(0)
#  novel_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#  abstract   :text(65535)
#

class Chapter < ActiveRecord::Base
  # Relations
  has_many   :likes_chapters
  has_many   :read_chapters
  belongs_to :novel
  belongs_to :user

  # Validations
  validates :novel_id, :user_id, :title, presence: true
end
