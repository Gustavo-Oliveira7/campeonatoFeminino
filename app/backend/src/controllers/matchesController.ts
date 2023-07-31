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
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const data = authorization.split(' ');
  const token = data[1];
  if (!token) return res.status(401).json({ message: validToken });
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
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const data = authorization.split(' ');
  const token = data[1];
  if (!token) return res.status(401).json({ message: validToken });
  try {
    await matchesService
      .updateMatch(Number(id), Number(homeTeamGoals), Number(awayTeamGoals));
    return res.status(200).json({ message: 'updated match' });
  } catch (exception) {
    return res.status(401).json({ message: validToken });
  }
};

export default { getAll, finishMatch, updateMatch };
