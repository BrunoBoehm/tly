class CreateTrackPlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :track_places do |t|
      t.integer :track_id
      t.integer :place_id
      t.text :description
      t.index [:track_id, :place_id]
      t.index [:place_id, :track_id]

      t.timestamps
    end
  end
end
