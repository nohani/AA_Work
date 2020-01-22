class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email

      validates :name, presence: true
      validates :email, presence: true
    end
  end
end
