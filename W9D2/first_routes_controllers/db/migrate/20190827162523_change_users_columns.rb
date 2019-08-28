class ChangeUsersColumns < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :name, :text
    remove_column :users, :email, :text
    add_column :users, :username, :text, null: false
    add_index :users, :username, unique: true
  end
end
