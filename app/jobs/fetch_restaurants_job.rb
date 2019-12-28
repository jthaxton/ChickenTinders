class FetchRestaurantsJob < ApplicationJob
  queue_as :urgent

  def perform(location)
    search("restaurant", location)["businesses"].map do |restaurant|
      Restaurant.create!(name: restaurant["name"], image_url: restaurant["image_url"])
    end.perform_later
  end

  private

  def search(term, location)
    url = "#{API_HOST}#{SEARCH_PATH}"
    params = {
      term: term,
      location: "#{location}",
      limit: SEARCH_LIMIT
    }

    response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
    response.parse
  end
end
