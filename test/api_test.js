process.env.NODE_ENV = 'test';
var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
//import server from '../src/index'


chai.use(chaiHttp)

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

describe('Platoon server', function() {
  describe('/platoons', function() {
    it('it should GET all the platoon location', (done) => {
      chai.request(host)
          .get('/platoons')
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
  });
  it('it should not POST a vehicle without firebaseInstanceId field', (done) => {
    
    chai.request(host)
        .post('/platoons')
        .send(new_platoon)
        .end((err, res) => {
            console.log(res);            
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('vehicles');
          done();
        });
  });

});

