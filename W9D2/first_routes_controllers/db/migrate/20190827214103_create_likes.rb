class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.references :likeable, null: false, polymorphic: true
    end
    add_index :likes, [:liker_id, :likeable_id, :likeable_type], unique: true
  end
end
