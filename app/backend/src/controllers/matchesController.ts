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

export default { getAll };
