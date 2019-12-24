class Api::UsersController < ApplicationController
  def create
    logout(current_user) if current_user
    password = BCrypt::Password.create(password)
    session_token = SecureRandom.urlsafe_base64
    user = User.new(username: params[:username], first_name: params[:first_name], last_name: params[:last_name], encrypted_password: password)
    if user.save
      signin(user)
      render json: { user: user }
    else
      render json: { errors: "BAD" }
    end
  end
end
