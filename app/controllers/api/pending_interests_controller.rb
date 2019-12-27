class Api::PendingInterestsController < ApplicationController
  def create
    PendingInterest.create!(user_id: current_user.id,
                            restaurant_id: params[:id])
    restaurants = Restaurant.all.map { |restaurant|
      RestaurantSerializer.new(
        restaurant, current_user: current_user
      )
    }
    restaurant = Restaurant.find(params[:id])
    if restaurant.pending_interests.count.even?
      MatchUsersJob.new.perform(restaurant)
    end

    render json: { restaurants: restaurants }
  end

  def destroy
    interest = pending_interests.detect { |i| i.restaurant_id.to_s == params[:id] }
    PendingInterest.delete(interest&.id)
    restaurants = Restaurant.all.map { |restaurant|
      RestaurantSerializer.new(
        restaurant, current_user: current_user
      )
    }
    render json: { restaurants: restaurants }
  end

  def index
    interests = pending_interests.map { |interest|
      PendingInterestSerializer.new(interest)
    }
    render json: { pending_interests: interests }
  end
end

private

def pending_interests
  current_user.pending_interests
end
