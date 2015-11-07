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

require 'rails_helper'

RSpec.describe ReadChapter, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
