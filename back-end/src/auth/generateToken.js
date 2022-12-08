const jwt = require('jsonwebtoken');
const getJwtKey = require('./getJwtKey');

async function generateToken({ id, email, name, role }) {
  const secret = await getJwtKey();
  const payload = {
    id,
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
