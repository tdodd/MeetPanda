/**
 * Homepage location btn listener
 */
(function() {

   var locationBtn = document.querySelector('.btn-main');
   var errorMsg = document.querySelector('.error');

   // Click Handler
   locationBtn.addEventListener('click', function () {

      // Request location from user
      navigator.geolocation.getCurrentPosition(allowLocation, denyLocation);

      /**
       * User allows location. Redirect to location page
       * @param {obj} pos the user's current geolocation 
       */
      function allowLocation(pos) {
         var lat = pos.coords.latitude;
         var lon = pos.coords.longitude;
         var url = 'http://localhost:3000/location?latitude='+ lat +'&longitude='+ lon;
         window.location = url;
      }

      /**
       * User denies location. Show error msg and do not redirect
       * @param {obj} err the error upon denying location information
       */
      function denyLocation(err) {
         errorMsg.innerHTML = 'You must enable location for this app to work';
         errorMsg.classList.remove('hidden');
      }

   });

})();
