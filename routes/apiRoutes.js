'use strict';
var db = require("../models");
require('dotenv').config();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);
<<<<<<< HEAD

=======
>>>>>>> 79cec0cc7398848b32b94df5af72941609d39134

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    client.search({
      location: '60607',
      price: '1',
      categories: 'pizza'
    }).then(response => {
        for (var i = 0; i < 1 ; i++ ){
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
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.json(dbExamples);
    });
  // });

  // Create a new example

  app.post("/api/zipcode", function(req, res) {
    var zipCode = req.body.zipcode;
    console.log(zipCode);
    // db.Example.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);

      client.search({
        location: '60607',
        price: '1',
        categories: 'bbq'
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

    });
  // });

  app.post("/api/out", function(req, res) {
    console.log("this is server req.body: " + JSON.stringify(req.body));
    
    // db.Example.create(req.body).then(function(dbExample) {
      res.json(req.body);
    // });
  });


  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
