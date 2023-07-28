import { Request, Response } from 'express';
import matchesService from '../services/matchesService';

const getAll = async (req: Request, res: Response) => {
  const result = await matchesService.getAll();
  res.status(200).json(result);
};

export default { getAll };
