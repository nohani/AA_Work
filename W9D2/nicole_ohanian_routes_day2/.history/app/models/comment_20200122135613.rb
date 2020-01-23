class Comment < ApplicationRecord
  belongs_to :user

  belongs_to :artwork
  
  validates :user_id, :artwork_id, :body, presence: true
end