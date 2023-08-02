import { Router } from 'express';
import leaderboardController from '../controllers/leaderboardController';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', leaderboardController.leaderHome);

export default leaderboardRouter;
