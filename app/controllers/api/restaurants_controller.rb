class Api::RestaurantsController < ApplicationController
  def index
    render json: [Restaurant.all]
  end
end
