import { Request, Response } from 'express';
import calcularDadosTimesEmCasa
, { IJogos, ordenarTimesPorPontuacao } from '../utils/calculadoraJogos';
import matchesService from '../services/matchesService';

const leaderHome = async (req: Request, res: Response) => {
  const result = await matchesService.getByProgress(false);
  const resultSemOrder = calcularDadosTimesEmCasa(result as unknown as IJogos[]);
  const resultComOrder = ordenarTimesPorPontuacao(resultSemOrder);
  return res.status(200).json(resultComOrder);
};

export default { leaderHome };
