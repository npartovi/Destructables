class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
    	t.string :title, null: false
    	t.string :body, null: false
    	t.integer :ord, null: false
    	t.integer :article_id, null: false
      t.timestamps
    end
  end
end
