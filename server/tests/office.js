// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import { describe } from 'mocha';
// import server from '../../server';

// const { expect } = chai;

// process.env.NODE_ENV = 'test';
// chai.use(chaiHttp);

// describe('Offices', () => {
//   it('should create a political office', (done) => {
//     const office = {
//       type: 'fedral',
//       name: 'Governor',
//     };
//     chai.request(server)
//       .post('/api/v1/offices')
//       .send(office)
//       .end((req, res) => {
//         const { message } = res.body;
//         expect(res.status).eql(201);
//         expect(message).eql('Office created successfully');
//         expect(res.body.data[0].type).eql(res.body.data[0].type);
//         done()
//       });
//   });

//   it('should not return office with Id not found', (done) => {
//     chai.request(server)
//       .get('/api/v1/office/999')
//       .end((req, res) => {
//         const { message } = res.body;
//         expect(res.status).eql(404);
//         expect(message).eql('Yet to create an Office');
//         done();
//       });
//   });
// });
