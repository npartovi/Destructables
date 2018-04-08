class Comment < ApplicationRecord

	validates :body, presence: true


	belongs_to :user,
		foreign_key: :user_id,
		class_name: 'User'

	belongs_to :article,
		foreign_key: :article_id,
		class_name: 'Article' 
end
