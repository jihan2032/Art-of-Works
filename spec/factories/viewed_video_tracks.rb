# == Schema Information
#
# Table name: viewed_video_tracks
#
#  id             :integer          not null, primary key
#  user_id        :integer
#  video_track_id :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

FactoryGirl.define do
  factory :viewed_video_track do
    user_id 1
video_track_id 1
  end

end
