import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import loginService from '../services/loginService';
import jwtUtils from '../utils/jwtUtils';

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

const role = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const data = authorization.split(' ');
  const token = data[1];
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const deco = jwtUtils.decodeToken(token);
    const result = await loginService.role(deco);
    return res.status(200).json({ role: result });
  } catch (exception) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default { login, role };
