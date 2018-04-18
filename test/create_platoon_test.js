
process.env.NODE_ENV = 'test';
var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
var sinon = require('sinon');
var expect = chai.expect;
var mongoose = require('mongoose');
require('sinon-mongoose');

var platoons = require('./mock_data')

const host = 'http://localhost:3000';

//Importing our todo model for our unit testing.
var Platoon = require('../api/models/platoons');
var new_platoon;

before('creating a test platoon object', (done) => {    
    var new_platoon = platoons[0]
    console.log(new_platoon);
    done()
})

// Test will pass if the todo is saved
describe("Post a new platoon", function(){
    it("should create new platoon", function(done){
        var PlatoonMock = sinon.mock(new Platoon(new_platoon));
        var platoon = PlatoonMock.object;
        var expectedResult = { status: true };
        PlatoonMock.expects('save').yields(null, expectedResult);
        platoon.save(function (err, result) {
            PlatoonMock.verify();
            PlatoonMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });
    // Test will pass if the todo is not saved
    it("should return error, if post not saved", function(done){
        var PlatoonMock = sinon.mock(new Platoon(new_platoon));
        var platoon = PlatoonMock.object;
        var expectedResult = { status: false };
        PlatoonMock.expects('save').yields(expectedResult, null);
        platoon.save(function (err, result) {
            PlatoonMock.verify();
            PlatoonMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});