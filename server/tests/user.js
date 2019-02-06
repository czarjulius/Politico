import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import { describe } from 'mocha';
import server from '../../server';

process.env.NODE_ENV = 'test';
chai.use(chaiHttp);
chai.should();

describe('TESTING ENDPOINT FOR USER LOGIN', () => {
  describe('post /auth/login', () => {
    it('Should return a success message for a successful login ', (done) => {
      const user1 = {
        email: 'julius@gmail.com',
        password: 'czar1234',
      };
      chai.request(server)
        .post('/api/v1/auth/login')
        .send(user1)
        .end((error, res) => {
          expect(res.body.user).to.be.an('array');
          expect(res).to.have.status(200);
          res.body.should.have.property('message');
          res.body.should.have.property('token');
          res.body.should.have.property('success').eql(true);
          done();
        });
    });
    it('Should return a error message for a unsuccessful login ', (done) => {
      const user1 = {
        email: 'julius@gmail.com',
        password: 'czar1234',
      };
      chai.request(server)
        .post('/api/v1/auth/login')
        .send(user1)
        .end((error, res) => {
          expect(res).to.be.an('object');
          expect(res).to.have.status(400);
          res.body.should.have.property('message');
          res.body.should.have.property('success').eql(false);
          done();
        });
    });
  });
});
