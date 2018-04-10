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

require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
