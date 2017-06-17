class CreateBookmarks < ActiveRecord::Migration[5.0]
  def change
    create_table :bookmarks do |t|
      t.integer :order
      t.string :s_id
      t.string :sectionstring
      t.string :title

      t.timestamps
    end
  end
end
