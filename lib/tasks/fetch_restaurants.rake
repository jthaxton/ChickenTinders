desc "Fetch restaurant data"
task :fetch_restaurants => [:environment] do
  API_HOST = "https://api.yelp.com"
  SEARCH_PATH = "/v3/businesses/search"
  BUSINESS_PATH = "/v3/businesses/" # trailing / because we append the business id to the path

  DEFAULT_BUSINESS_ID = "yelp-san-francisco"
  DEFAULT_TERM = "dinner"
  DEFAULT_LOCATION = "San Francisco, CA"
  SEARCH_LIMIT = 5

  API_KEY = "mIauHKzRo6KtldeZLRjIiGXZCui_M01CbratO5NZq3EbmrrHqEl2qbV7FIH-Ikh63usWGo0mSEdalNSWynPKeRTaNMgBMXxpxMlqphBKHyf3N60QRsgtxeqG8aTsXHYx"

  def search(term, location)
    url = "#{API_HOST}#{SEARCH_PATH}"
    params = {
      term: term,
      location: location,
      limit: SEARCH_LIMIT
    }

    response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
    response.parse
  end

  search("restaurant", "san francisco")["businesses"].map do |restaurant|
    Restaurant.create!(name: restaurant["name"], image_url: restaurant["image_url"])
  end
end
