class PendingInterestSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_name, :created_at, :match_name

  def restaurant_name
    object&.restaurant&.name || "N/A"
  end

  def match_name
    match ? other_interest&.user&.first_name : "Nobody yet :("
  end

  private

  def match
    object.match
  end

  def other_interest
    match&.pending_interests&.detect { |interest| interest.id != object.id }
  end
end
