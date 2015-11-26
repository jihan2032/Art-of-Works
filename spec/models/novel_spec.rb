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

require 'rails_helper'

RSpec.describe Novel, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
