class CreateNeedsInitiativesJoinTable < ActiveRecord::Migration[5.2]
  def change
     create_join_table :needs, :initiatives    
  end
end
