class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
    	t.integer :user_id
    	t.integer :article_id
      	t.timestamps
    end

    add_index(:favorites, [:user_id, :article_id], unique: true )
  end
end
