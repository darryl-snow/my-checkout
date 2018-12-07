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
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('id');
        done();
      });
  });
  it('should POST to execute-payment', (done) => {
    chai.request(server)
      .post('/api/execute-payment', {
        paymentID: 'PAY-49Y83756MN669392HLQFAQDA',
        payerID: 'XMKAYUG4C5C4W',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        done();
      });
  });
});
