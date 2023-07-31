import { Router } from 'express';
import matchesController from '../controllers/matchesController';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.getAll);
matchesRouter.patch('/:id/finish', matchesController.finishMatch);

export default matchesRouter;
