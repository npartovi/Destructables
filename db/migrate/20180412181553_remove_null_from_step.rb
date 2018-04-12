class RemoveNullFromStep < ActiveRecord::Migration[5.1]
  def change

  	change_column_null :steps, :title, true
  end
end
