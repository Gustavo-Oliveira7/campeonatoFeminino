import { Request, Response } from 'express';
import matchesService from '../services/matchesService';

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
  if (!token) return res.status(401).json({ message: 'Token must be a valid token' });
  try {
    const result = await matchesService.finishMatch(Number(id));
    return res.status(200).json({ message: result });
  } catch (exception) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default { getAll, finishMatch };
