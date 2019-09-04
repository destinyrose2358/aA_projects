FactoryBot.define do
  factory :user do
    username { Faker::Internet.username }
    password { "hunter_2" }
  end
end