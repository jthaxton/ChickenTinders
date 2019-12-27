class Match < ApplicationRecord
  belongs_to :restaurant
  belongs_to :pending_interest
  belongs_to :user_1, class: :user
  belongs_to :user_2, class: :user
end
