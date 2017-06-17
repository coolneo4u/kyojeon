class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :login
      t.string :kind
      t.text :friends
      t.text :blocks
      t.string :password

      t.timestamps
    end
  end
end
