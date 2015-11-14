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

FactoryGirl.define do
  factory :novel do
    title "MyString"
user_id 1
category "MyString"
cover_photo "MyString"
  end

end
