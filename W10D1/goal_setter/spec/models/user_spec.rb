require 'rails_helper'

RSpec.describe User, type: :model do

  before(:each) do
    create(:user)
  end

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:session_token) }
      
  it { should validate_uniqueness_of(:email) }
  it { should validate_uniqueness_of(:session_token) }


  describe "::find_by_credentials" do
    it "finds a user based on email and password" do  
      new_user = User.create( email:"tom123@aol.com", session_token: "8sbj92")
      password = "hunter12"
      new_user.password_digest = BCrypt::Password.create(password)
      expect(User.find_by_credentials(new_user.email, password)).to include(new_user)
    end   
  end 
  
  describe '#is_password?' do
    let(:user) {create(:user)}

    context 'with a valid password' do
      it 'returns true' do
        expect(user.is_password?("password").to eq(true)
      end 
    end

    context 'with a invalid password' do
      it 'returns false' do
        expect(user.is_password?("paswrd").to eq(false)
      end 
    end
  end
end