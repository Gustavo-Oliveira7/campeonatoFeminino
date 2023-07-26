import * as jwt from 'jsonwebtoken';

const JWT_SECRET = 'suaSenhaSecreta';

const decodeToken = (token: string): jwt.JwtPayload => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded as jwt.JwtPayload;
};

export default { decodeToken };
