class AddAttachmentImgUrlToArticles < ActiveRecord::Migration[5.1]
  def self.up
    change_table :articles do |t|
      t.attachment :img_url
    end
  end

  def self.down
    remove_attachment :articles, :img_url
  end
end
