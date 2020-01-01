class CreateUserPreferences < ActiveRecord::Migration[5.2]
  def change
    create_table :user_preferences do |t|
      t.integer :user_id, null: false
      t.string :gender
      t.integer :birth_year
      t.integer :zip
      t.string :gender_preference
      t.timestamps
    end
    add_column :users, :user_preference_id, :integer
  end
end
