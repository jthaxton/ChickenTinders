class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :interested

  def interested
    @instance_options[:current_user].restaurants.include?(object)
  end
end
