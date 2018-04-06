class RemoveColumnsFromArticle < ActiveRecord::Migration[5.1]
  def change

  	remove_column :articles, :img_url
  	
  end
end
