import { NextFunction, Request, Response } from 'express';

const validToken = 'Token must be a valid token';

const tokenValtidation = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const data = authorization.split(' ');
  const token = data[1];
  if (!token) return res.status(401).json({ message: validToken });
  return next();
};

export default tokenValtidation;
