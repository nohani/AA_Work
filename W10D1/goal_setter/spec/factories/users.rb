FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { "hunter2"}
    session_token { SecureRandom::urlsafe_base64(16) }
  end
end
