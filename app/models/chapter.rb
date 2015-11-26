# == Schema Information
#
# Table name: chapters
#
#  id         :integer          not null, primary key
#  title      :string
#  chapter_no :integer          default(1)
#  parent_id  :integer          default(0)
#  novel_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#  abstract   :text(65535)
#  content    :text(65535)
#  likes      :integer          default(0)
#  reads      :integer          default(0)
#

class Chapter < ActiveRecord::Base
  # Relations
  has_many   :liked_chapters
  has_many   :read_chapters
  belongs_to :novel
  belongs_to :user
  belongs_to :parent, class_name: 'Chapter'
  has_many   :children, class_name: 'Chapter', foreign_key: 'parent_id'


  # Validations
  validates :title, presence: true
end
