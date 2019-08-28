class CreateArtworkShares < ActiveRecord::Migration[6.0]
  def change
    create_table :artwork_shares do |t|
      t.integer :artwork_id, null: false
      t.integer :viewer_id, null: false
    end
    add_index :artwork_shares, [:viewer_id, :artwork_id], unique: true
    add_index :artwork_shares, :artwork_id
  end
end
