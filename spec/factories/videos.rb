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

FactoryGirl.define do
  factory :video do
    title "MyString"
user_id 1
cover_photo "MyString"
abstract "MyText"
above_18 false
  end

end
