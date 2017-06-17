class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.string :s_id
      t.datetime :timestamp
      t.string :title
      t.text :text
      t.string :kind

      t.timestamps
    end
  end
end
