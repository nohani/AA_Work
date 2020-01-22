class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email

      validate :name, presence: true
      validate :email, presence: true
    end
  end
end
