var db = require("../models");
var db = require("../routes/apiRoutes");


var helpers = {

    mostPopSearch: function(){

        db.Search.findAndCountAll({
            where: {
               inorout: 'out'
            },  
         })
         .then(function(result){
      
           var outTotal = result.count;
           console.log("this is the count: " + outTotal);
           
         });
    },
    mostPopZip: function(){

        return data
    },
    mostPopCategory: function(){

        return data
    },
    mostPopSpend: function(){

        return data
    }
};

helpers.mostPopSearch();

module.exports = helpers;





