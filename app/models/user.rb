# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  username                 :string           not null
#  email                    :string           not null
#  password_digest          :string           not null
#  session_token            :string           not null
#  profile_img              :string
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  profile_img_file_name    :string
#  profile_img_content_type :string
#  profile_img_file_size    :integer
#  profile_img_updated_at   :datetime
#

class User < ApplicationRecord

	validates :username, :session_token, :password_digest, presence: true
	validates :username, :session_token, :email, uniqueness: true
	validates :password, length: {minimum: 6, allow_nil: true}

	has_attached_file :profile_img, default_url: "https://s3-us-west-1.amazonaws.com/destructabledev/articles/img_urls/000/000/012/original/default_profile_pic.jpg"
  	validates_attachment_content_type :profile_img, content_type: /\Aimage\/.*\Z/

	has_many :articles,
		class_name: 'Article',
		foreign_key: :user_id

	has_many :comments,
		class_name: 'Comment',
		foreign_key: :user_id

	after_initialize :ensure_session_token

	attr_reader :password


	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def reset_session_token
		self.session_token = SecureRandom.urlsafe_base64
		self.save
		self.session_token
	end

	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64
	end

	def is_password?(password)
		BCrypt::Password.new(password_digest).is_password?(password)
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		user && user.is_password?(password) ? user : nil
	end
end
