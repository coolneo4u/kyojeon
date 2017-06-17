class CreateScriptures < ActiveRecord::Migration[5.0]
  def change
    create_table :scriptures do |t|
      t.integer :favorite
      t.string :book
      t.integer :chapter
      t.integer :section
      t.integer :verse
      t.string :s_id
      t.string :language
      t.string :image
      t.string :sectionstring
      t.string :title
      t.string :title2
      t.text :text

      t.timestamps
    end
  end
end
