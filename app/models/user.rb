# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  first_name             :string
#  last_name              :string
#  mobile_number          :string
#  title                  :string
#  profile_picture        :string
#  user_name              :string
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  # Relations
  has_many :novels
  has_many :chapters
  has_many :read_chapters, class_name: 'Chapter'
  has_many :liked_chapters, class_name: 'Chapter'

  # Validations
  validates :user_name, presence: true

  mount_uploader :profile_picture, ProfilePictureUploader

  searchkick text_start: [:first_name, :last_name, :user_name]

  # Methods
  def name
    "#{user_name.titleize}"
  end

end
