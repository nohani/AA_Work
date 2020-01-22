class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :image_url
      t.integer :artist_id
      t.timestamps

      add_index :artworks, [:user_id, :artwork_id]
    end
  end
end
