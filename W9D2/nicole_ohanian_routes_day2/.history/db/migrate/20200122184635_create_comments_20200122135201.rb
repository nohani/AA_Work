class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.references :user_id, foreign_key: true, null: false
      t.references :artwork_id, foreign_key: true, null: false
      t.text :body, null: false
    end
  end
end
