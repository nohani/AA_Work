class Comment < ApplicationRecord
  belongs_to :user

  belongs_to :artwork
  
  has_many :likes,
    as: :likeable,
    dependent: :destroy

  validates :user_id, :artwork_id, :body, presence: true
end