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
#  abstract   :text
#

require 'rails_helper'

RSpec.describe Chapter, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
