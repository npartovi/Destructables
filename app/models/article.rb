class Article < ApplicationRecord

	validates :title, :body, :img_url, presence: true
	validates :title, uniqueness: true

	belongs_to :user,
		class_name: 'User',
		foreign_key: :user_id
end
