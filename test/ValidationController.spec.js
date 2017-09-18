const should = require('chai').should();
const validation = require('../controllers/ValidationController');

describe('ValidationController', () => {

	describe('#validateRadius', () => {

		it('should be false for negative radius', () => {
			validation.validateRadius(-1).should.be.false;
		});

		it('should be false for zero radius', () => {
			validation.validateRadius(0).should.be.false;
		});

		it('should have a value', () => {
			validation.validateRadius().should.be.false;
		});

		it('should be false for non-numbers', () => {
			validation.validateRadius("ten").should.be.false;
		});

		it('should be false for values that are too large', () => {
			validation.validateRadius(1001).should.be.false;
		});

		it('should be true for valid numbers', () => {
			validation.validateRadius(10).should.be.true;
		});


	});

	describe('#validateLatitude', () => {

		it('should be false for invalid latitude values', () => {
			validation.validateLatitude(-91).should.be.false;
			validation.validateLatitude(91).should.be.false;
		});

		it('should have a value', () => {
			validation.validateLatitude().should.be.false;
		});

		it('should be a number', () => {
			validation.validateLatitude("ten").should.be.false;
		});

		it('should be true for valid latitude values', () => {
			validation.validateLatitude(-90).should.be.true;
			validation.validateLatitude(0).should.be.true;
			validation.validateLatitude(90).should.be.true;
		});

	});

	describe('#validateLongitude', () => {

		it('should be false for invalid longitude values', () => {
			validation.validateLongitude(-181).should.be.false;
			validation.validateLongitude(181).should.be.false;
		});

		it('should have a value', () => {
			validation.validateLongitude().should.be.false;
		});

		it('should be a number', () => {
			validation.validateLongitude("ten").should.be.false;
		});

		it('should be true for valid longitude values', () => {
			validation.validateLongitude(-180).should.be.true;
			validation.validateLongitude(0).should.be.true;
			validation.validateLongitude(180).should.be.true;
		});

	});

});