class CreateNeedAreas < ActiveRecord::Migration[5.2]
  def change
    create_table :need_areas do |t|
      t.string :name

      t.timestamps
    end
  end
end
