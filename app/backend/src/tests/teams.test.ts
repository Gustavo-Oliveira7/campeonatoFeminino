import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import TeamsModel from '../database/models/TeamsModel';
import { erroMsgId, oneTeam, teams } from './mocks/mockTeams';


chai.use(chaiHttp);

describe('testando a rota /teams', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testando o retorno de todos os times', async function () {
    sinon.stub(TeamsModel, 'findAll').resolves(teams as any);
    const response = await chai.request(app).get('/teams');
    
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(teams);
  })
  it('Testando o retorno de 1 time', async function () {
    sinon.stub(TeamsModel, 'findByPk').resolves(oneTeam as any);

    const response = await chai.request(app).get('/teams/1');
    
    expect(response.body).to.deep.equal(oneTeam);
  })
  it('Testando o retorno quando id passado nao encontra time', async function () {
    sinon.stub(TeamsModel, 'findByPk').resolves(null);

    const response = await chai.request(app).get('/teams/55');

    
    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal(erroMsgId);
  })
});