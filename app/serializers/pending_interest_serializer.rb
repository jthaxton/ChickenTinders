class PendingInterestSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_name, :created_at

  def restaurant_name
    object&.restaurant&.name || "N/A"
  end
end
