
'use strict';
require('dotenv').config();

const yelp = require('yelp-fusion');

const client = yelp.client(process.env.YELP_API_KEY);
// const client = yelp.client(
//     "xYGiIJr7nkicoQEwqbbpXgTMjS7jTCS6vTnPLDXfEDmmub9LoU9QbhS7bLP_u0ER2qAPo281wK_R9LO_fd8pZQ846dLGer-gGNEpQGHAGPnS_a9IFw-TNMEOUASXW3Yx");

client.search({
  location: '60607',
  price: '1',
  categories: 'pizza'
}).then(response => {
    for (var i=0;i<11;i++){
  console.log(response.jsonBody.businesses[i].name);
  console.log(response.jsonBody.businesses[i].location.address1);
  console.log(response.jsonBody.businesses[i].location.city);
  console.log(response.jsonBody.businesses[i].display_phone);
  console.log(response.jsonBody.businesses[i].price);
  console.log(response.jsonBody.businesses[i].image_url);
//   console.log(response.jsonBody.businesses[i].categories);
    }
}).catch(e => {
  console.log(e);
});