class Api::Users::PreferencesController < ApplicationController
  # def update
  #   render json: {msg: "GOT HERE"}
  # end

  def create
    
  end

  def index
    preferences = current_user.preference
    preferences ||= []
    render json: {preferences: preferences}
  end
end
