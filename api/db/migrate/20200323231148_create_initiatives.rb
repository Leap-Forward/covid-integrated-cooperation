class CreateInitiatives < ActiveRecord::Migration[5.2]
  def change
    create_table :initiatives do |t|
      t.string :air_id
      t.string :name
      t.text :description
      t.date :available
      t.string :website
      t.integer :lat
      t.integer :lng

      t.timestamps
    end
  end
end
