class Artwork < ApplicationRecord
  belongs_to :artist,
    class_name: "User",
    foreign_key: :artist_id

  validates :artist_id,
    presence: true

  validates :title, 
    presence: true, 
    uniqueness: { scope: :artist }

  has_many :artwork_shares,
    dependent: :destroy
end