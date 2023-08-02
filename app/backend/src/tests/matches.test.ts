import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import MatchesModel from '../database/models/MatchesModel';
import {allMatches, allMatchesInProgress} from './mocks/mockMatches';

describe('Testando a rota /matches', function () {
  beforeEach(function () { sinon.restore(); });
  it('testando o retorno do getAll matches', async function () {
    sinon.stub(MatchesModel, 'findAll').resolves(allMatches as any);
    const response = await chai.request(app).get('/matches');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(allMatches);
  })
  it('testando o retorno do getAll matches com o inProgress sendo true', async function () {
    sinon.stub(MatchesModel, 'findAll').resolves(allMatchesInProgress as any);
    const response = await chai.request(app).get('/matches?inProgress=true');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(allMatchesInProgress);
  })
  
})