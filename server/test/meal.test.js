import chai from 'chai';
import chaiHttp from 'chai-http';
import mealModel from '../model/mealModel';
import server from '../bin/www';
import {expect} from "chai";

const should = chai.should();
chai.use(chaiHttp);

describe('Meal', () => {
  beforeEach((done) => {
    mealModel.push({
      id: mealModel.length,
      mealId: '1111',
      catererId: '2222',
      mealName: 'Rice',
      mealAmount: '300',
      imgUrl: 'rice.png',
      dateAdded: '2018-04-20'
    });
    done(); 
  });

  describe('GET Meals', () => {
    it('should GET all meals from a particular caterer', (done) => {
      chai.request(server)
      .get('/api/v1/meals/2222')
      .send(mealModel)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
    
  });

  describe('GET one Meal', () => {
    it('should GET one meal from a particular caterer', (done) => {
      chai.request(server)
      .get('/api/v1/meal/12445')
      .send(mealModel)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
    
  });

  describe('POST Meal', () => {
    it('should POST a new meal from a caterer', (done) => {
      chai.request(server)
        .post('/api/v1/meals')
        .send({
          id: 0,
          mealId: '1111',
          catererId: '2222',
          mealName: 'Rice',
          mealAmount: '300',
          imgUrl: 'rice.png',
          dateAdded: '2018-04-20'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    
  });

  describe('PUT Meal', () => {
    it('should Update a meal', (done) => {
      chai.request(server)
        .put('/api/v1/meals/1111')
        .send({
          id: mealModel.length,
          mealId: '1111',
          catererId: '2222',
          mealName: 'Rice',
          mealAmount: '300',
          imgUrl: 'rice.png',
          dateAdded: '2018-04-20'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    
  });

  describe('DELETE Meal', () => {
    it('should Delete a meal', (done) => {
      chai.request(server)
        .delete('/api/v1/meals/1111')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    
  });


});