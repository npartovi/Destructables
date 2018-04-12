class RemoveBodyFromArticle < ActiveRecord::Migration[5.1]
  def change

  	remove_column :articles, :body
  end
end
