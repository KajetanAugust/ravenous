

const apiKey = ''; // ADD YOUR YELP API KEY HERE

const Yelp = {
    search(term, location, sortBy) { // passing search terms to fetch
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                    Authorization: `Bearer ${apiKey}`}
                }
            ) // calling fetch with arguments provided by user in SearchBar
            .then( response => {
                return response.json() // parsing response
            })
            .then( jsonResponse => {
                    if (jsonResponse.businesses) { //checking if response exists
                        return jsonResponse.businesses.map(business => ({
                                id: business.id,
                                imageSrc: business.image_url,
                                name: business.name,
                                address:business.location.address1,
                                city:business.location.city,
                                state:business.location.state,
                                zipCode:business.location.zip_code,
                                category: business.categories[0].title,
                                rating:business.rating,
                                reviewCount: business.review_count,
                        }));
                    }
                });
    }
};

// exporting yelp object
export default Yelp;