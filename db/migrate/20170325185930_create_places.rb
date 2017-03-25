class CreatePlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :places do |t|
      t.string :name
      t.text :description
      t.integer :city_id

      t.timestamps
    end
    add_index :places, :city_id
  end
end
