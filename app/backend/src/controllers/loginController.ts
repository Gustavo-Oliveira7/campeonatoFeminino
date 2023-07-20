import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import loginService from '../services/loginService';

const JWT_SECRET = 'suaSenhaSecreta';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    await loginService.login(email, password);
    return res.status(200).json({ token: jwt.sign(email, JWT_SECRET) });
  } catch (exception) {
    const error = exception as { message: string };
    return res.status(401).json({ message: error.message });
  }
};

export default { login };
