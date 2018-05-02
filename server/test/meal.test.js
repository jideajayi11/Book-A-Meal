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

  describe('GET Meal', () => {
    it('should GET all meals from a particular caterer', () => {
      chai.request(server)
      .get('/api/v1/meals/2222')
      .send(mealModel)
      .end((err, res) => {
        res.should.have.status(200);
      });
    });
    
  });
});