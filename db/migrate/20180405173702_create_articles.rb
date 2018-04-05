class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
    	t.string :title, null: false
    	t.string :body, null: false
    	t.string :img_url, null: false
    	t.integer :user_id, null: false
		t.timestamps
    end
    add_index(:articles, [:user_id,:title], unique: true)
  end
end
