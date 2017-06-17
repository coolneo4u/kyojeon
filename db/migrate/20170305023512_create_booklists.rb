class CreateBooklists < ActiveRecord::Migration[5.0]
  def change
    create_table :booklists do |t|
      t.integer :order
      t.string :book
      t.string :language
      t.string :link

      t.timestamps
    end
  end
end
