const Validation = require('./ValidationController');

var LocationController = {

   /**
    * LocationController.validateLocation(latitude, longitude)
    *
    * Validate latitude and longitude coordinates and return errors if any
    *
    * @param {float} latitude the latitude coord
    * @param {float} longitude the longitude coord
    */
   validateLocation: function(latitude, longitude) {

      // Client context
      var context = {
         lat: latitude,
         lng: longitude,
         error: false
      };

      // Validate coordinates
      if (!Validation.validateLatitude(latitude) || !Validation.validateLongitude(longitude)) {

         context.error = { // Invalid coordinates
            message: 'Invalid coordinates'
         };

      }

      return context;

   }, // end LocationController.validateLocation()

};


module.exports = LocationController;
