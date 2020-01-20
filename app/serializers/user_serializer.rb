class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :session_token
end
