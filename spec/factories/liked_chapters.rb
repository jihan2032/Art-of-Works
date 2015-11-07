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

FactoryGirl.define do
  factory :liked_chapter do
    user_id 1
chapter_id 1
  end

end
