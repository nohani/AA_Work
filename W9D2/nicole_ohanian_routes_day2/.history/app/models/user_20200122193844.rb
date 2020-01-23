class User < ApplicationRecord
  has_many :artworks,
    foreign_key: :artist_id,
    dependent: :destroy

  has_many :artwork_shares,
    foreign_key: :viewer_id,
    dependent: :destroy

  # this method retuns art shared WITH the user, not BY
  has_many :shared_artworks,
    through: :artwork_shares,
    source: :artwork,
    dependent: :destroy

  has_many :comments,
    dependent: :destroy

  has_many :likes, 
    foreign_key: :liker_id,
    dependent: :destroy

  validates :username, presence: true
end