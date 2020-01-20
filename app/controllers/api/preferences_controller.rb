class Api::PreferencesController < ApplicationController
  def update
    preference = current_user.user_preference
    update_attrs = {}
    params.keys.each {|k| update_attrs[k] = params[k] if potential_params[k.to_sym]}
    preference.update!(update_attrs)
    render json: {preferences: current_user.user_preference}
  end

  def create
    create_attrs = {}
    params.keys.each {|k| create_attrs[k] = params[k] if potential_params[k.to_sym]}
    create_attrs.merge!({user_id: current_user.id})
    preference = UserPreference.create!(create_attrs)
    current_user.user_preference = preference
    current_user.save!
    render json: { preferences: current_user.user_preference }
  end

  def index
    render json: {preferences: current_user.user_preference, user: UserSerializer.new(current_user)}
  end

  private

  def potential_params
    {
      "zip": params[:zip],
      "birth_year": params[:birth_year],
      "gender": params[:gender],
      "gender_preference": params[:gender_preference]
    }
  end
end
