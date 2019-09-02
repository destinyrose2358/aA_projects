class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.integer :album_id, null: false
      t.string :title, null: false
      t.integer :ord, null: false
      t.text :lyrics
      t.string :track_type, null: false, default: "Regular"

      t.timestamps
    end
    add_index :tracks, :album_id
  end
end
