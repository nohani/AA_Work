class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :liker, foreign_key: {to_table: :users}
      t.references :likeable, polymorphic: true
    end
  end
end
