class Artwork < ApplicationRecord
  belongs_to :artist,
    class_name: "User",
    foreign_key: :artist_id
 
  has_many :artwork_shares,
    dependent: :destroy

  has_many :comments,
    dependent: :destroy

  has_many :likes,
    as: :likeable,
    dependent: :destroy

  validates :artist_id,
    presence: true

  validates :title, 
    presence: true, 
    uniqueness: { scope: :artist }

 
end