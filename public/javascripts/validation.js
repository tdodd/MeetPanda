/**
 * Validate a radius
 * 
 * A radius value must be a positive number less than 10,000 
 * 
 * @param {int} r the radius to validate
 * @return {bool} true if the radius is valid and false otherwise
 */
function validateRadius(r) {
   return r && !isNaN(r) && r > 0 && r <= 10000;
}

/**
 * Validate a latitude coordinate
 * 
 * A latitude coordinate must be a number in the range +/- 90
 * 
 * @param {float} l the latitude to validate
 * @return {bool} true if the latitude is valid and false otherwise
 */
function validateLatitude(l) {
   return l && !isNaN(l) && l >= -90 && l <= 90;
}

/**
 * Validate a longitude coordinate
 * 
 * A longitude coordinate must be a number in the range +/- 180
 * 
 * @param {float} l the longitude to validate
 * @return {bool} true if the longitude is valid and false otherwise
 */
function validateLongitude(l) {
   return l && !isNaN(l) && l >= -180 && l <= 180;
}
