class Article < ApplicationRecord

	validates :title, :body, presence: true
	validates :title, uniqueness: true
	
	has_attached_file :img_url, default_url: "https://s3-us-west-1.amazonaws.com/destructabledev/articles/img_urls/000/000/012/original/missing.png"
  	validates_attachment_content_type :img_url, content_type: /\Aimage\/.*\Z/


	belongs_to :user,
		class_name: 'User',
		foreign_key: :user_id


	def ensure_body_text
		self.body ||= "test"
	end

	
end
