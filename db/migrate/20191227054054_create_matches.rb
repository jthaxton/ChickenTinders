class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :restaurant_id, null: false
      t.integer :pending_interest_id_1, null: false
      t.integer :pending_interest_id_2, null: false
      t.timestamps
    end

    add_column :pending_interests, :match_id, :integer
  end
end
3
