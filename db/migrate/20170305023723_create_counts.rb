class CreateCounts < ActiveRecord::Migration[5.0]
  def change
    create_table :counts do |t|
      t.datetime :timestamp
      t.string :s_id

      t.timestamps
    end
  end
end
