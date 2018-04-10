# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string           not null
#  ord        :integer          not null
#  article_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Step < ApplicationRecord

	validates :title, :body, presence: true

	belongs_to :article,
		foreign_key: :article_id,
		class_name: 'Article'

end
