import decode from 'jwt-decode';

function decryptToken(token) {
  const { payload } = decode(token);
  return payload;
}

export default decryptToken;
