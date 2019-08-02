class Api::UsersController < ApplicationController
    def create 
        password = BCrypt::Password.create(password)
        session_token = SecureRandom.urlsafe_base64
        user = User.new(username: params[:username], first_name: params[:first_name], last_name: params[:last_name], encrypted_password: password)
        if user.save 
            signin(user)
            render json: {user: user}
        else 
            render json: {}
        end
    end 
end
