class CreateDicts < ActiveRecord::Migration[5.0]
  def change
    create_table :dicts do |t|
      t.string :title
      t.text :define

      t.timestamps
    end
  end
end
