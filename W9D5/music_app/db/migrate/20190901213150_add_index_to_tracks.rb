class AddIndexToTracks < ActiveRecord::Migration[6.0]
  def change
    add_index :tracks, [:album_id, :ord], unique: true
  end
end
