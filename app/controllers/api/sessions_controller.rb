class Api::SessionsController < ApplicationController
  def create
    render json: {} if current_user
    user = User.find_by_credentials(params[:username], params[:password])
    debugger
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
      render json: ['YOU ARE LOGGED OUT']
    else
      render json: ['No Current User'], status: 404
    end
  end
end
