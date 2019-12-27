class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :user_1_id, null: false
      t.integer :user_2_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :pending_interest_id, null: false
      t.timestamps
    end
  end
end
