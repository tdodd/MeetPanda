const express = require('express');
const router = express.Router();
const Promise = require('bluebird');

/**
 * The Dispatcher handles incoming requests by sending them to
 * the approprioate controller, then sending the response to the client.
 */

// Controllers
const location = require('./controllers/LocationController');
const meetup = require('./controllers/MeetupController');

/**
 * GET /
 * 
 * Display the homepage
 */
router.get('/', (req, res, next) => {
   res.render('homepage');
});

/**
 * GET /location?latitude=&longitude=
 * 
 * Allow the user to select a radius around their current location
 * 
 * @param latitude the user's latitude coord
 * @param longitude the user's longitude coord
 */
router.get('/location', (req, res, next) => {
   const context = location.get(req.query.latitude, req.query.longitude);
   res.render('location', context);
});

/**
 * GET /meetup
 * 
 * Present a list of meetups within the desired radius
 * 
 * @param latitude the user's latitude coord
 * @param longitude the user's longitude coord
 * @param radius the desired radius
 */
router.get('/meetup', (req, res, next) => {
   meetup.get(req.query.radius, req.query.latitude, req.query.longitude)
      .then((context) => res.render('meetup', context))
      .catch((context) => res.render('meetup', context));
});

module.exports = router;
