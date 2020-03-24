class AddAirIdToNeedCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :need_categories, :air_id, :string
  end
end
