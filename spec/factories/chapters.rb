# == Schema Information
#
# Table name: chapters
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  chapter_no :integer          default(1)
#  parent_id  :integer          default(0)
#  novel_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

FactoryGirl.define do
  factory :chapter do
    title "MyString"
chapter_no 1
parent_id 1
novel_id 1
  end

end
