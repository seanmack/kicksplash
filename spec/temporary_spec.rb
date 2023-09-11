require "rails_helper"

RSpec.describe "Temporary", type: :system do
  # Spec fails for now so we can verify CI is working
  it { should have_secure_password }

  it "should pass" do
    expect(true).to be true
  end
end
