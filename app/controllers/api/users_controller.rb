class Api::UsersController < ApplicationController
  def create
    password = BCrypt::Password.create(password)
    user = User.new(username: params[:username], first_name: params[:first_name], last_name: params[:last_name], encrypted_password: password)
    if user.save
      signin(user)
      render json: { user: UserSerializer.new(user) }
    else
      render json: { errors: "BAD" }
    end
  end

  def update
    update_attrs = {}
    params.keys.each do |k|
      update_attrs[k] = params[k] if potential_params[k.to_sym]
    end

    current_user.update!(update_attrs)
    render json: {user: UserSerializer.new(current_user)}
  end

  private

  def potential_params
    {
      "password": params[:password],
      "username": params[:username]
    }
  end
end
