import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import { findUser, login, token } from './mocks/mockLogin';

import { Response } from 'superagent';
import UsersModel from '../database/models/UsersModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('testando a rota /login', () => {
  it('testando o login com retorno positivo', async () => {
    const request = await chai.request(app).post('/login').send(login);

    expect(request.status).to.equal(200);
    expect(request.body.token).to.equal(
      "eyJhbGciOiJIUzI1NiJ9.YWRtaW5AYWRtaW4uY29t.vSMJu-krftTkVlavLvzELuzUZpWf7PtmkwnM5H2_AdM"
    )
  })
  it('testando o login com email invalido', async () => {
    const request = await chai.request(app).post('/login').send({
      "email": "admin@adimin.com",
      "password": "secret_admin"
    });

    expect(request.status).to.equal(401);
    expect(request.body.message).to.equal(
      "Invalid email or password"
    )
  })
  it('testando a role com token valido', async () => {
    sinon.stub(UsersModel, 'findOne')
      .resolves(UsersModel.build(findUser as any))
      
    const request = await chai.request(app).get('/login/role')
      .set('authorization', token)
      .send(login);
    expect(request.status).to.equal(200);
    expect(request.body).to.deep.equal({
      "role": "admin"
    })
  })
})