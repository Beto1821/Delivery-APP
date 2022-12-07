const jwt = require('jsonwebtoken');
const getJwtKey = require('./getJwtKey');

async function generateToken({ email, name, role }) {
  const secret = await getJwtKey();
  const payload = {
    email,
    name,
    role,
  };
  return jwt.sign({ payload }, secret, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });
}

module.exports = generateToken;
