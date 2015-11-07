# == Schema Information
#
# Table name: liked_chapters
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  chapter_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe LikedChapter, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
