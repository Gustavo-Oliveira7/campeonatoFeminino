import * as bcrypt from 'bcryptjs';
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

export default { login };
