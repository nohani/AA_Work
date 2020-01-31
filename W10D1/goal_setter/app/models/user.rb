class User < ApplicationRecord
  validates :email, :password_digest, presence: true
end
