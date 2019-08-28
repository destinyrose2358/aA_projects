class CreateArtworks < ActiveRecord::Migration[6.0]
  def change
    create_table :artworks do |t|
      t.text :title, null: false
      t.text :image_url, null: false
      t.integer :artist_id, null: false
    end
    add_index :artworks, [:artist_id, :title], unique: true
  end
end
