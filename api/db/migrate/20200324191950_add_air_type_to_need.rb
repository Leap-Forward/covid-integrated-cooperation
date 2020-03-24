class AddAirTypeToNeed < ActiveRecord::Migration[5.2]
  def change
    add_column :needs, :air_type, :string
  end
end
