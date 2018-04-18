
process.env.NODE_ENV = 'test';
var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
var sinon = require('sinon');
var expect = chai.expect;
var mongoose = require('mongoose');
require('sinon-mongoose');

chai.use(chaiHttp)

// our example model is just an Array

var Platoon = require('../api/models/platoons');


before('Executing before hook', (done) => {
  // save to database
  done()
})

describe("Get all platoons", function(){
  // Test will pass if we get all todos
 it("should return all platoons", function(done){
     var PlatoonMock = sinon.mock(Platoon);
     var expectedResult = {status: true, platoons: []};
     PlatoonMock.expects('find').yields(null, expectedResult);
     Platoon.find(function (err, result) {
         PlatoonMock.verify();
         PlatoonMock.restore();
         expect(result.status).to.be.true;
         done();
     });
 });

 // Test will pass if we fail to get a todo
 it("should return error", function(done){
     var PlatoonMock = sinon.mock(Platoon);
     var expectedResult = {status: false, error: "Something went wrong"};
     PlatoonMock.expects('find').yields(expectedResult, null);
     Platoon.find(function (err, result) {
         PlatoonMock.verify();
         PlatoonMock.restore();
         expect(err.status).to.not.be.true;
         done();
     });
 });
});

describe("Geo Location", () => {
    
    describe("Saving geolocation", () => {
        it("should save location coordinates", () => {
            assert(false)
        })
    })

    describe("retreive geo coordinates", () => {
        it("should get current platoon location", () =>{
            assert(false)
        })
        it("should get nearby platoons", () => {
            assert(false)
        })
    })
})


after((done) => {
  // remove from database
  done()
})

// beforeEach(function() {
//   // runs before each test in this block
// });

// afterEach(function() {
//   // runs after each test in this block
// });