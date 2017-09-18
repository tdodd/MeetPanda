/**
 * Handle radius form submission
 */
(function() {

   var form = document.querySelector('#radius-form');

   // Check if radius is valid, then redirect to meetups page 
   form.addEventListener('submit', function (e) {

      // Prevent default form submission
      e.preventDefault();

      // Get url query params
      var query = window.location.search.substring(1);
      var params = query.split('&');
      var latitude = parseFloat(params[0].replace('latitude=', ''));
      var longitude = parseFloat(params[1].replace('longitude=', ''));

      // Validate coordinates
      if (!validateLatitude(latitude) || !validateLongitude(longitude)) {
         return false;
      }

      // Radius input
      var radius = document.querySelector('#radius').value;

      if (validateRadius(radius)) { // Valid radius

         // Redirect to meetup page
         var url = 'http://localhost:3000/meetup?radius='+ radius +'&latitude='+ latitude +'&longitude='+ longitude;
         window.location = url;

      } else { // Invalid radius
         var errorMsg = document.querySelector('.error');
         errorMsg.innerHTML = 'Invalid Radius';
         errorMsg.classList.remove('hidden');
         return false;
      }

      return true;

   });

})();