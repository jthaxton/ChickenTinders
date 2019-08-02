class User < ApplicationRecord
    def self.find_by_credentials(username, password)
        @user = User.find_by_username(username)
        if @user && @user.is_password?(password)
          @user
        else
          nil
        end
      end
    
      def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
      end
    
      def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
      end
    
      def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
      end
    
      def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
      end
end
