import { Request, Response } from 'express';
import teamsService from '../services/teamsService';

const getAll = async (req: Request, res: Response) => {
  const result = await teamsService.getAll();
  return res.status(200).json(result);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await teamsService.getById(Number(id));
    res.status(200).json(result);
  } catch (exception) {
    const error = exception as { message: string };
    return res.status(404).json({ message: error.message });
  }
};

export default { getAll, getById };
