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
#  likes       :integer          default(0)
#  reads       :integer          default(0)
#

FactoryGirl.define do
  factory :novel do
    title "MyString"
user_id 1
category "MyString"
cover_photo "MyString"
  end

end
