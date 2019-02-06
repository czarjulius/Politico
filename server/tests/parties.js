import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe } from 'mocha';
import server from '../../server';

const { expect } = chai;

process.env.NODE_ENV = 'test';
chai.use(chaiHttp);

describe('Parties', () => {
  it('should create a political parties', () => {
    chai.request(server)
      .post('/api/v1/parties')
      .send({
        name: 'PDP',
        logoUrl: 'wwww.logo.png',
        hqAddress: 'lagos, Nigeria',
      })
      .end((req, res) => {
        const { party, status, message } = res.body;
        expect(res.status).eql(201);
        expect(message).eql('Party created successfully');
        expect(party.name).eql('PDP');
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
      .get('/api/v1/parties/1')
      .end((req, res) => {
        const { party, status, message } = res.body;
        expect(res.status).eql(200);
        expect(party.name).eql('PDP');
        expect(party.id).eql(1);
      });
  });


  it('should not return party with Id not found', () => {
    chai.request(server)
      .get('/api/v1/parties/100')
      .end((req, res) => {
        const { status, message } = res.body;
        expect(res.status).eql(404);
        expect(message).eql('The party with the given ID not found.');
      });
  });
});
