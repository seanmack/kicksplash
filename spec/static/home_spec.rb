require "rails_helper"

RSpec.describe "Home", type: :system do
  it "shows the right content" do
    visit home_path
    expect(page).to have_content "Tincidunt lobortis feugiat"
  end
end
