import { NextFunction, Request, Response } from 'express';

const msgResponse = 'All fields must be filled';

export const emailValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: msgResponse });
  }
  if (email.includes('exemplo')) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  return next();
};

export const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: msgResponse });
  }
  if (password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  return next();
};
