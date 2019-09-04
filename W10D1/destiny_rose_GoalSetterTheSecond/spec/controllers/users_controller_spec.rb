require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #new" do
    it "renders new template" do
      get :new
      expect(response).to have_http_status(:success)
      expect(response).to render_template(:new)
    end
  end

  describe "GET #show" do
    it "renders show template" do
      get :show, params: { id: 1 }
      expect(response).to have_http_status(:success)
      expect(response).to render_template(:show)
    end
  end

  describe "GET #create" do
    context "with valid params" do
      it "redirects to user show page" do
        get :create, params: {user: { username: "Hegel", password: "valid_password"} }
        expect(response).to redirect_to(user_url(User.last))
      end
    end

    context "with invalid params" do
      it "validates the presence of username and password" do
        get :create, params: { user: { username: "AAAAHHHHHHHH" } }
        expect(response).to render_template('new')
        expect(response).to have_http_status(:unprocessable_entity)
        expect(flash[:errors]).to be_present
      end
    end
    
  end

  describe "GET #destroy" do
    before(:each) { get :destroy, params: { id: 1 } }

    it "destroys existing user" do
      expect(User.find_by(id: 1)).to be_nil
    end

    it "redirects to sign up page" do
      expect(response).to redirect_to(new_user_url)
    end

    it "only allows user to destroy their own account"
  end

end
