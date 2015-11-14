# == Schema Information
#
# Table name: novels
#
#  id          :integer          not null, primary key
#  title       :string
#  user_id     :integer
#  category    :string
#  cover_photo :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  abstract    :text
#  likes       :integer          default(0)
#  reads       :integer          default(0)
#

require 'rails_helper'

RSpec.describe Novel, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
