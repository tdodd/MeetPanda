/**
 * Create the Google map widget
 */
function createMap() {

   // Get url query params
   var query = window.location.search.substring(1);
   var params = query.split('&');
   var latitude = parseFloat(params[0].replace('latitude=', ''));
   var longitude = parseFloat(params[1].replace('longitude=', ''));

   // Check Coordinates
   if (validateLatitude(latitude) && validateLongitude(longitude)) {

      // Generate map widget
      var map = new google.maps.Map(document.querySelector('.map'), {
         zoom: 9,
         center: { lat: latitude, lng: longitude },
         mapTypeId: 'terrain'
      });

      // Default map radius value
      var radiusVal = 25;

      // Generate radius circle around user's location
      var radiusCircle = new google.maps.Circle({
         strokeColor: '#FF0000',
         strokeOpacity: 0.8,
         strokeWeight: 2,
         fillColor: '#FF0000',
         fillOpacity: 0.35,
         map: map,
         center: { lat: latitude, lng: longitude },
         radius: radiusVal * 1000
      });

   } else { // Invalid parameters

      // Hide map widget
      var map = document.querySelector('.map');
      map.classList.add('hidden');

      // Show error
      var error = document.querySelector('.error');
      error.innerHTML = 'Invalid Location Parameters';
      error.classList.remove('hidden');

   }

   // Watch radius text input for changes
   var radius = document.querySelector('#radius');
   radius.addEventListener('keyup', function () {

      radiusVal = parseInt(radius.value);

      // Generate radius circle (in km)
      if (validateRadius(radiusVal)) {
         radiusCircle.setRadius(radiusVal * 1000);
      }

   });

} // end createMap