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

require 'rails_helper'

RSpec.describe ViewedVideoTrack, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
