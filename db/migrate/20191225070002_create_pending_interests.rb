class CreatePendingInterests < ActiveRecord::Migration[5.2]
  def change
    create_table :pending_interests do |t|
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
