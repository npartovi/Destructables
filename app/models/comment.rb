# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string
#  user_id    :integer
#  article_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord

	validates :body, presence: true


	belongs_to :user,
		foreign_key: :user_id,
		class_name: 'User'

	belongs_to :article,
		foreign_key: :article_id,
		class_name: 'Article' 
end
