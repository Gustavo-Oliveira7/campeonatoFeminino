import { Router } from 'express';
import matchesController from '../controllers/matchesController';
import tokenValtidation from '../middlewares/tokenValidation';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.getAll);
// matchesRouter.post('/', matchesController.createMatch);
matchesRouter.patch('/:id/finish', tokenValtidation, matchesController.finishMatch);
matchesRouter.patch('/:id', tokenValtidation, matchesController.updateMatch);

export default matchesRouter;
