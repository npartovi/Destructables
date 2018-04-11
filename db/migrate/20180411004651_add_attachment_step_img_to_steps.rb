class AddAttachmentStepImgToSteps < ActiveRecord::Migration[5.1]
  def self.up
    change_table :steps do |t|
      t.attachment :step_img
    end
  end

  def self.down
    remove_attachment :steps, :step_img
  end
end
