# == Schema Information
#
# Table name: articles
#
#  id                   :integer          not null, primary key
#  title                :string           not null
#  body                 :string           not null
#  user_id              :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  img_url_file_name    :string
#  img_url_content_type :string
#  img_url_file_size    :integer
#  img_url_updated_at   :datetime
#

class Article < ApplicationRecord

	validates :title, presence: true
	validates :title, uniqueness: true
	
	has_attached_file :img_url, default_url: "https://s3-us-west-1.amazonaws.com/destructabledev/articles/img_urls/000/000/012/original/missing.png"
  	validates_attachment_content_type :img_url, content_type: /\Aimage\/.*\Z/


	belongs_to :user,
		class_name: 'User',
		foreign_key: :user_id

	has_many :comments,
		class_name: 'Comment',
		foreign_key: :article_id

	has_many :steps,
		class_name: 'Step',
		foreign_key: :article_id

	def self.top_five_search(query_param)
    	param = '%' + query_param.downcase + '%'
    	Article.where('lower(title) LIKE ?', param).limit(5)
  	end


	
end
