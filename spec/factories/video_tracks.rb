# == Schema Information
#
# Table name: video_tracks
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  track_no   :integer          default(0)
#  parent_id  :integer
#  video_id   :integer
#  user_id    :integer
#  abstract   :text(65535)
#  link_url   :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :video_track do
    title "MyString"
track_no 1
parent_id 1
video_id 1
user_id 1
abstract "MyText"
link_url "MyString"
  end

end
