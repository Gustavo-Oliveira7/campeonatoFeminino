import { NextFunction, Request, Response } from 'express';

const teamsValidation = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;
  const home = Number(homeTeamId);
  const away = Number(awayTeamId);
  if (homeTeamId === awayTeamId) {
    return res.status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }
  if (home > 16 || home < 1) {
    return res.status(404)
      .json({ message: 'There is no team with such id!' });
  }
  if (away > 16 || away < 1) {
    return res.status(404)
      .json({ message: 'There is no team with such id!' });
  }
  return next();
};

export default teamsValidation;
