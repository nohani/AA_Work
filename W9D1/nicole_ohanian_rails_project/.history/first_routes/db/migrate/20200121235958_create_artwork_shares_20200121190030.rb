class CreateArtworkShares < ActiveRecord::Migration[5.2]
  def change
    create_table :artwork_shares do |t|
      t.references :artwork, foreign_key: true
      t.references :viewer, :user, foreign_key: true
    end
  end
end
