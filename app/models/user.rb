class User < ApplicationRecord
  has_many :pending_interests
  has_many :restaurants, through: :pending_interests
  belongs_to :user_preference

  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username)
    if @user && @user.is_password?(password)
      @user
    else
      nil
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.encrypted_password).is_password?(password)
  end

  def password=(password)
    @password = password
    self.encrypted_password = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = nil
    self.save!
    self.session_token
  end

  def set_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def local_restaurants
    restaurants.where(zip: zip)
  end
end
