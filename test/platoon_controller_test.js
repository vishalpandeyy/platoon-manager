

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
var platoonController = require('../api/controllers/platoonController')

var new_platoon;

before('creating a test platoon object', (done) => {    
    var new_platoon = platoons[0]
    console.log(new_platoon);
    done()
})

// Test will pass if the todo is saved
describe("POST a new platoon", function(){
    it("should create new platoon", function(done){
        var PlatoonMock = sinon.mock(new Platoon(new_platoon));
        var platoon = PlatoonMock.object;
        var expectedResult = { status: true };
        PlatoonMock.expects('save').yields(null, expectedResult);
        platoon.save(function (err, result) {
            PlatoonMock.verify();
            PlatoonMock.restore();
            expect(result.status).to.be.true;
            expect(result)
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

    it("should create a platoon with one vehicle as lead",  (done) => {
        // var soloPlatoon = new Platoon(new_platoon)
        var PlatoonMock = sinon.mock(new Platoon(new_platoon));
        var platoon = PlatoonMock.object;
        var expectedResult = { status: true };
        PlatoonMock.expects('save').yields(null, expectedResult);
        platoon.save(function (err, result) {
            PlatoonMock.verify();
            PlatoonMock.restore();
            console.log(result);
            
            expect(result.status).to.be.true;
            expect(result)
            done();
        });
    })
});
// tests for all the platoon controller functions
describe('Platoon manager', () => {
    
    describe('Create a platoon', () => {
        it('should save a platoon in the database', (done) => {
            var PlatoonMock = sinon.mock(new Platoon(new_platoon));
            var platoon = PlatoonMock.object;
            var expectedResult = { status: true };
            PlatoonMock.expects('save').yields(null, expectedResult);
            platoon.save(function (err, result) {
                PlatoonMock.verify();
                PlatoonMock.restore();
                console.log(result);
                
                expect(result.status).to.be.true;
                expect(result)
                done();
            });
        })
    })

    describe('Update platoon on a new vehicle joining', () => {
        it('should increment vehicle count of the platoon in the database')
    })

    describe('Update a platoon on a vehicle exiting a platoon', () => {
        it('should decrement vehicle count of a platoon in the database')
    })

    describe('Find platoons near a geolocation', () => {
        it('should return platoons nearby a specified geolocation from the database')
    })

    describe('Find if a platoon is full and cannot be joined', () => {
        it('should flag the response with platoon: isfull')
    })

    describe('Sync Platoon dynamics', () => {
        
        it('should notify all platoon vehicles of a change in speed')

        it('should notify all platoon vehicles of a change in safe distance')

        it('should notify all platoon vehicles for a vehicle exiting or joining the platoon')

    })

    describe('Handle failures based on sensor information', () => {
        it('should notify all vehicles of a possible fault in the system',)

        it('should notify all vehicles of a possible fault in the system')
    })  
})
