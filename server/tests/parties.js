import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe } from 'mocha';
import server from '../../server';

const { expect } = chai;

process.env.NODE_ENV = 'test';
chai.use(chaiHttp);

describe('Parties', () => {
  it('should create a political parties', (done) => {
    const party = {
      name: `PDP-${Math.floor(Math.random() * 55555)}`,
      logoUrl: 'wwww.logo.png',
      hqAddress: 'lagos, Nigeria',
    };
    chai.request(server)
      .post('/api/v1/parties')
      .send(party)
      .end((req, res) => {
        const { message } = res.body;
        expect(res.status).eql(201);
        expect(message).eql('Party created successfully');
        expect(res.body.data[0].name).eql(res.body.data[0].name);
        done()
      });
  });

  it('should not create a political with party name not provided', () => {
    chai.request(server)
      .post('/api/v1/parties')
      .send({
        logoUrl: 'wwww.logo.png',
        hqAddress: 'lagos, Nigeria',
      })
      .end((req, res) => {
        const { status, errors } = res.body;
        expect(res.status).eql(422);
        expect(errors[0].message).eql('name is required');
      });
  });

  it('should fetch a specific political party', () => {
    chai.request(server)
      .get('/api/v1/parties/8')
      .end((req, res) => {
        expect(res.status).eql(200);
        expect(res.body.data[0].name).eql('ÄNPPONE');
        expect(res.body.data[0].id).eql(8);
      });
  });

  it('should not return party with Id not found', (done) => {
    chai.request(server)
      .get('/api/v1/parties/999')
      .end((req, res) => {
        const { message } = res.body;
        expect(res.status).eql(404);
        expect(message).eql('Yet to create a party');
        done();
      });
  });
});
