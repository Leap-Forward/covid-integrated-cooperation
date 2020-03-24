class CreateNeedCategoriesNeedAreasJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :need_categories, :need_areas
  end
end
