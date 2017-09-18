const should = require('chai').should();
const Meetup = require('../controllers/MeetupController');

describe('MeetupController', () => {

   // Dummy location data
   const radius = 1;
   const lat = 40.7683186;
   const lon = -73.9765384;

   describe('#getMeetups', () => {

      it('should return the radius', (done) => {

         Meetup.getMeetups(radius, lat, lon)
            .then(meetups => {
               meetups.radius.should.equal(radius)
               done();
            })
            .catch(err => console.log(err));

      });

      it('should have all mandatory properties', () => {

         Meetup.getMeetups(radius, lat, lon)
            .then(meetups => {
               m = meetups.data[0];
               m.should.have.property('name');
               m.should.have.property('link');
               m.should.have.property('group');
               m.should.have.property('time');
               m.should.have.property('visibility');
               m.should.have.property('waitlist_count');
               m.should.have.property('yes_rsvp_count');
               done();
            })
            .catch(err => console.log(err));

      });

   });

});