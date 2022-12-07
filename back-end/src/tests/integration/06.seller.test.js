const chai = require('chai');
const chaiHttp = require('chai-http');
const Sinon = require('sinon');
const app = require('../../api/app');
const { tokenMock, sellersMock, userMock } = require('./mocks/userMock');
const { User } = require('../../database/models/index');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests all routes on /seller', () => {
  beforeEach(() => {
    Sinon.stub(User, 'findAll').resolves(sellersMock);
    Sinon.stub(jwt, 'verify').resolves(userMock.customer);
  });

  afterEach(() => {
    User.findAll.restore();
    jwt.verify.restore();
  });

  describe('Tests GET /seller', () => {
    it('Should return all selers on the database', async () => {
      const response = await chai
        .request(app)
        .get('/seller')
        .set('Authorization', tokenMock);

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(sellersMock);
    });
  });
});
