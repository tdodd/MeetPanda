const env = require('../env');
const request = require('request');
const Promise = require('bluebird');
const Validation = require('./ValidationController');

const MeetupController = {

   /**
    * MeetupController.get(radius, latitude, longitude)
    *
    * Get a list of events within a specified radius of a location
    *
    * @param {int} radius the search radius
    * @param {float} latitude the lat coordinate
    * @param {float} longitude the lng coordinate
    * @return {Promise} the list of events
    */
   get: function(radius, latitude, longitude) {

      // Client context
      let context = {
         radius: radius
      };

      return new Promise((resolve, reject) => {

         // Validate params
         if (Validation.validateRadius(radius) && Validation.validateLatitude(latitude) && Validation.validateLongitude(longitude)) {

            // Meetup api endpoint for events
            const endpoint = 'https://api.meetup.com/find/events?key=' + env.MEETUPS_API_KEY + '&lon=' + longitude + '&radius=' + radius + '&lat=' + latitude + '&sign=true';  

            // Send the request to meetup api
            request(endpoint, (error, response, body) => {

               if (error) {

                  context.error = {
                     message: 'Something went wrong'
                  };
                  reject(error);

               } else { // No errors, get response body
                  context.data = JSON.parse(body);
                  resolve(context);
               }

            });
            
         } else { // Invalid params
            
            context.error = {
               message: 'Invalid parameters'
            };

            reject(context);

         }

      });      

   } // end MeetupController.get()

};


module.exports = MeetupController;
