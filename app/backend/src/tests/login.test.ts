import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('testando a rota /login', () => {
  it('testando o login com retorno positivo', async () => {
    const request = await chai.request(app).post('/login').send({
      "email": "admin@admin.com",
      "password": "secret_admin"
    });

    expect(request.status).to.equal(200);
    expect(request.body.token).to.equal(
      "eyJhbGciOiJIUzI1NiJ9.YWRtaW5AYWRtaW4uY29t.vSMJu-krftTkVlavLvzELuzUZpWf7PtmkwnM5H2_AdM"
    )
  })
})