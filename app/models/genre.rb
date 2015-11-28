# == Schema Information
#
# Table name: genres
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ActiveRecord::Base
  # Relations
  has_and_belongs_to_many :novels, uniq: true
  # Methods
  def name_titleized
    name.titleize
  end
end
