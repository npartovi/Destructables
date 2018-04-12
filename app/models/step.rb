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

	validates :body, presence: true

	has_attached_file :step_img, default_url: "missing.png"
  	validates_attachment_content_type :step_img, content_type: /\Aimage\/.*\Z/

	belongs_to :article,
		foreign_key: :article_id,
		class_name: 'Article'

end
