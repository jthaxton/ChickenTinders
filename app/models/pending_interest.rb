class PendingInterest < ApplicationRecord
  before_destroy :destroy_match
  belongs_to :user
  belongs_to :restaurant
  belongs_to :match, foreign_key: :match_id, class_name: "Match", optional: true

  private

  def destroy_match
    match&.destroy!
  end
end
