var env = require('../env');

/**
 * 
 */
var AuthController = {

   /**
    * Get token from Meetup auth server
    */
   authorize: function() {

      // Authorization endpoint
      var endpoint = 'https://secure.meetup.com/oauth2/authorize?client_id='+ env.CONSUMER_KEY +'&response_type=code&redirect_uri='+ env.CONSUMER_REDIRECT_URI;

      // Header: HTTP application/x-www-form-urlencoded


   },

};

module.exports = AuthController;