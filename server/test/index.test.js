/*
//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//import meals from '../server/model/mealModel';
//import routes from '../server/routes/mealRoute';
let meals = require('../server/model/mealModel');
//let routes = require('../server/routes/mealRoute');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/bin/www');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
    beforeEach((done) => { //Before each test we empty the database
        meals.remove({}, (err) => { 
           done();         
        });     
    });

  // Test the /GET route
  
  describe('/GET meals', () => {
      it('it should GET all the books', (done) => {
        chai.request(server)
            .get('../server/api/v1/meals/6789')
            .end((err, res) => {
               // res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});

*/

//import assert from "assert";
import {expect} from "chai";

describe('Basic Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
        expect(1).to.equal(1);
    });
 it('should return first charachter of the string', function () {
     equal("Hello".charAt(0), 'H');
    });
});