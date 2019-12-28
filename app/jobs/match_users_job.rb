class MatchUsersJob < ApplicationJob
  queue_as :default

  def perform(restaurant)
    interests = restaurant.pending_interests[-2..-1]
    match = Match.create!(restaurant_id: restaurant.id,
                          pending_interest_id_1: interests[0].id,
                          pending_interest_id_2: interests[1].id)
    interests[0].match_id = match.id
    interests[1].match_id = match.id
    interests.each { |interest| interest.save! }
  end
end
