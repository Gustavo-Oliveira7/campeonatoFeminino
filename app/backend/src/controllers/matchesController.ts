import { Request, Response } from 'express';
import matchesService from '../services/matchesService';

const validToken = 'Token must be a valid token';

const getAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  if (inProgress) {
    const progress = inProgress === 'true';
    const result = await matchesService.getByProgress(progress);
    return res.status(200).json(result);
  }
  const result = await matchesService.getAll();
  return res.status(200).json(result);
};

const finishMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await matchesService.finishMatch(Number(id));
    return res.status(200).json({ message: result });
  } catch (exception) {
    return res.status(401).json({ message: validToken });
  }
};

const updateMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { homeTeamGoals, awayTeamGoals } = req.body;
  try {
    await matchesService
      .updateMatch(Number(id), Number(homeTeamGoals), Number(awayTeamGoals));
    return res.status(200).json({ message: 'updated match' });
  } catch (exception) {
    return res.status(401).json({ message: validToken });
  }
};

const createMatch = async (req: Request, res: Response) => {
  const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
  const result = await matchesService
    .createMatch(homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals);
  return res.status(201).json(result);
};

export default { getAll, finishMatch, updateMatch, createMatch };
