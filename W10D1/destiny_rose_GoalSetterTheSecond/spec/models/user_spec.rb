require 'rails_helper'

RSpec.describe User, type: :model do

  let(:user) { FactoryBot.build(:user) }

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }

    describe 'uniqueness' do
      FactoryBot.create(:user)

      it { should validate_uniqueness_of(:username) }
      it { should validate_uniqueness_of(:session_token) }
    end
  end

  describe "::find_by_credentials" do
    let(:user) { FactoryBot.create(:user) }

    it "returns user for matching username and password" do
      expect(User.find_by_credentials(user.username, "hunter_2")).to eq(user)
    end

    it "returns nil if incorrect password given" do
      expect(User.find_by_credentials(user.username, "hunter2")).to eq(nil)
    end

  end

  describe "#ensure_session_token" do

    it "sets session token if no session token" do
      user.ensure_session_token
      expect(user.session_token).not_to be_nil
    end

    it "returns new session_token" do
      token = user.ensure_session_token
      expect(user.session_token).to eq(token)
    end
  end

  describe "::generate_session_token" do
    it "generates something" do
      expect(User.generate_session_token).not_to be_nil
    end

    it "generates an string with a length of 22" do
      expect(User.generate_session_token.length).to eq(22)
    end
  end

  describe "#reset_session_token!" do
    it "changes the value of the session token to a new value and returns that value" do
      test_user = FactoryBot.create(:user)
      old_token = test_user.session_token
      new_token = test_user.reset_session_token!

      expect(new_token).not_to eq(old_token)
      expect(User.find_by(session_token: new_token)).to eq(test_user)
    end
  end

  describe "#is_password?" do

    it " should return false if the given password doesn't match the instances password" do
      expect(user.is_password?("sdfkluhsdlk")).to be(false)
    end

    it " should return true if the password does match the instances password" do
      expect(user.is_password?("hunter_2")).to be(true)
    end

  end

  describe "#password=" do

    it "should assign password_digest" do
      expect(user.password_digest).not_to be_nil
    end

    it "shouldn't save password to database" do
      expect { User.find_by(password: "hunter_2") }.to raise_error
    end

    it "should assign a value to password" do
      expect(user.password).to eq('hunter_2')
    end
  end


end
