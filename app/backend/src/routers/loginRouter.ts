import { Router } from 'express';
import loginController from '../controllers/loginController';
import { emailValidation, passwordValidation } from '../middlewares/loginValidation';

const loginRouter = Router();

loginRouter.post('/', emailValidation, passwordValidation, loginController.login);

export default loginRouter;
