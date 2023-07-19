import { Router } from 'express';
import teamsController from '../controllers/teamsController';

const teamRouter = Router();

teamRouter.get('/', teamsController.getAll);
teamRouter.get('/:id', teamsController.getById);

export default teamRouter;
