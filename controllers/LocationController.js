const Validation = require('./ValidationController');

var LocationController = {

   /**
    * LocationController.get(latitude, longitude)
    *
    * Validate latitude and longitude values
    *
    * @param {float} latitude the latitude coord
    * @param {float} longitude the longitude coord
    */
   get: function(latitude, longitude) {

      // Client context
      var context = {
         lat: latitude,
         lng: longitude,
         error: false
      };

      // Validate coordinates
      if (!Validation.validateLatitude(latitude) || !Validation.validateLongitude(longitude)) {
         context.error = {
            message: 'Invalid coordinates'
         };
      }

      return context;

   }, // end LocationController.get()

};


module.exports = LocationController;
