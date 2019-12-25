class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(params[:username], params[:password])
    if user
      signin(user)
      render json: user
    else
      render json: { errors: ["bad"] }
    end
  end

  def destroy
    if current_user
      logout
      render json: ['YOU ARE LOGGED OUT'], status: 200
    else
      render json: ['No Current User'], status: 404
    end
  end
end
