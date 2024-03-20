const jwt = require('jsonwebtoken');
const JWT_SECRET_CODE = process.env.JWT_SECRET || 'secret';

const jwtEncode = (id, email) => {
  return jwt.sign({ id: id, email: email }, JWT_SECRET_CODE, {
    expiresIn: '300m',
  });
};

const jwtDecode = (token) => {
  return jwt.verify(token, JWT_SECRET_CODE);
};

module.exports = {
  jwtEncode,
  jwtDecode,
};