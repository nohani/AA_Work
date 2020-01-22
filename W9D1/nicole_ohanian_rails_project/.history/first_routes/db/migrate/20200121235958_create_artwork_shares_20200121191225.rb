class CreateArtworkShares < ActiveRecord::Migration[5.2]
  def change
    create_table :artwork_shares do |t|
      t.belongs_to :artwork, foreign_key: true
      t.belongs_to :viewer, foreign_key: {to_table: :users}
    end

    add_index :artwork_shares, :viewer_id
    add_index :artwork_shares, [:artwork_id, :viewer_id], unique: true
    
  end
end
