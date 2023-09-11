require "rails_helper"

RSpec.describe "Pages", type: :system do
  it "renders the home page" do
    visit home_path
    expect(page).to have_content "Explore the World with Exciting People"
  end

  it "renders the about page" do
    visit about_path
    expect(page).to have_content "About Company Title"
  end

  it "renders the projects page" do
    visit projects_path
    expect(page).to have_content "Our Projects"
  end

  it "renders the blog page" do
    visit blog_path
    expect(page).to have_content "Featured Posts"
  end

  it "renders the contact page" do
    visit contact_path
    expect(page).to have_content "Get in Touch"
  end

  it "renders the reviews page" do
    visit reviews_path
    expect(page).to have_content "Our Reviews"
  end
end
