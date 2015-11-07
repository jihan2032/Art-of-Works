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
#

class Novel < ActiveRecord::Base
  # Relations
  has_many   :chapters
  belongs_to :user

  # Validations
  validates :title, :user_id, :category, presence: true

end
