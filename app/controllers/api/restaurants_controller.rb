class Api::RestaurantsController < ApplicationController
  def index
    restaurants = Restaurant.all.map { |restaurant| RestaurantSerializer.new(restaurant, current_user: current_user) }
    render json: { restaurants: restaurants }
  end
end
