class User < ApplicationRecord
  has_secure_password
  has_secure_token :session_token
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}
end
