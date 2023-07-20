import { Router } from 'express';
import { emailValidation, passwordValidation } from '../middlewares/loginValidation';

const loginRouter = Router();

loginRouter.post('/', emailValidation, passwordValidation, (req, res) => res.json({ ok: true }));

export default loginRouter;
