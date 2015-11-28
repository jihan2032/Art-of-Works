# == Schema Information
#
# Table name: video_tracks
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  track_no   :integer
#  parent_id  :integer
#  video_id   :integer
#  user_id    :integer
#  abstract   :text(65535)
#  link_url   :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe VideoTrack, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
