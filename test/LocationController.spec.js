const should = require('chai').should();
const location = require('../controllers/LocationController');

describe('LocationController', () => {

   // Dummy coordinates
   const lat = 40.7683186;
   const lon = -73.9765384;

   describe('#validateLocation', () => {

      it('should not return an error for valid coordinates', () => {
         location.validateLocation(lat, lon).error.should.be.false;
      });

      it('should return the latitude', () => {
         location.validateLocation(lat, lon).lat.should.equal(lat);
      });

      it('should return the longitude', () => {
         location.validateLocation(lat, lon).lng.should.equal(lon);
      });

      it('should return an error for invalid coordinates', () => {
         location.validateLocation('lat', 'lon').error.message.should.be.a.string;
         location.validateLocation('lat', lon).error.message.should.be.a.string;
         location.validateLocation(lat, 'lon').error.message.should.be.a.string;
      });
      
      it('should return an error for empty coordinates', () => {
         location.validateLocation(lat).error.message.should.be.a.string;
         location.validateLocation().error.message.should.be.a.string;
      });

   });

});