# == Schema Information
#
# Table name: read_chapters
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  chapter_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ReadChapter < ActiveRecord::Base
  # Relations
  belongs_to :user
  belongs_to :chapter
end
