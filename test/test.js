import assert from 'assert';
import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

process.env.NODE_ENV = 'test';

// Setup
let server = null;
const should = chai.should();
chai.use(chaiHttp);

// Test suite
describe('My Checkout', () => {
  beforeEach(() => {
    server = app;
  });
  afterEach(() => {
    server.stop();
  })
  it('should POST to create-payment', (done) => {
    chai.request(server)
      .post('/api/create-payment')
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('message');
        done();
      });
  });
  it('should POST to execute-payment', (done) => {
    chai.request(server)
      .post('/api/execute-payment')
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('message');
        done();
      });
  });
});
