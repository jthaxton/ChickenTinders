class AddZipToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :zip, :integer
    add_column :restaurants, :zip, :integer
  end
end
