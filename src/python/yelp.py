import requests
import json
import config

# create object with API key
API_KEY = config.api_key
ENDPOINT = 'https://api.yelp.com/v3/businesses/search'
HEADERS = {'Authorization': 'bearer %s' % API_KEY}


# define the parameters
PARAMETERS = {'term': 'boba',
            'limit': 50,
            'location': 'Las Vegas'} # 'key': 'value'

# make request to yelp API
response = requests.get(url = ENDPOINT, params = PARAMETERS, headers = HEADERS)

# convert to dictionary
business_data = response.json()

for biz in business_data['businesses']:
    print(biz['name'])