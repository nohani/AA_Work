class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :liker, foreign_key: true
      t.references :likeable, polymorphic: true
    end
  end
end
