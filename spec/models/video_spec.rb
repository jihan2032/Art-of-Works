# == Schema Information
#
# Table name: videos
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  user_id     :integer
#  cover_photo :string(255)
#  abstract    :text(65535)
#  above_18    :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Video, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
