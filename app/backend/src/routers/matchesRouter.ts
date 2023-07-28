import { Router } from 'express';
import matchesController from '../controllers/matchesController';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.getAll);

export default matchesRouter;
