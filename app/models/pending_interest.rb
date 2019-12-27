class PendingInterest < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant
  has_one :match, foreign_key: :match_id, class_name: :match
end
