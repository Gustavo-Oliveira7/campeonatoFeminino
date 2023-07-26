import * as bcrypt from 'bcryptjs';
import { JwtPayload } from 'jsonwebtoken';
import UsersModel from '../database/models/UsersModel';

const login = async (email: string, password: string) => {
  const result = await UsersModel.findOne({ where: { email } });
  console.log(result?.dataValues);

  if (!result) throw new Error('Invalid email or password');
  if (!bcrypt.compareSync(password, result.dataValues.password)) {
    throw new Error('Invalid email or password');
  }
  return [result];
};

const role = async (email: JwtPayload) => {
  const find = await UsersModel.findOne({ where: { email } });
  return find?.dataValues.role;
};

export default { login, role };
