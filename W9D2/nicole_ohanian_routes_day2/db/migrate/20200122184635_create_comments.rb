class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.references :user,
        foreign_key: {to_table: :users}, 
        null: false

      t.references :artwork,
        foreign_key: {to_table: :artworks}, 
        null: false

      t.text :body, null: false
    end
  end
end
