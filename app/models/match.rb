class Match < ApplicationRecord
  belongs_to :restaurant
  belongs_to :pending_interest_1, foreign_key: :pending_interest_id_1, class_name: "PendingInterest"
  belongs_to :pending_interest_2, foreign_key: :pending_interest_id_2, class_name: "PendingInterest"

  def pending_interests
    [pending_interest_1, pending_interest_2]
  end
end
