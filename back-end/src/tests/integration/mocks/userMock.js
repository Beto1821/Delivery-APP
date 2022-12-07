const userMock = {
  admin: {
    id: 1,
    name: 'Delivery App Admin',
    email: 'adm@deliveryapp.com',
    password: 'a4c86edecc5aee06eff8fdeda69e0d04',
    role: 'administrator',
  },
  seller: {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
  customer: {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer',
  },
};

const sellersMock = [
  {
    id: 2,
    name: 'Fulana Pereira',
    role: 'seller',
  },
];

const tokenMock = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiZW1haWwiOiJhZG1AZGVsaXZlcnlhcHAuY29tIiwicGFzc3dvcmQiOiJhNGM4NmVkZWNjNWFlZTA2ZWZmOGZkZWRhNjllMGQwNCIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIn0sImlhdCI6MTY2OTg2Njc3MCwiZXhwIjoxNjcwNDcxNTcwfQ.h3nVmueB3on5wp1vHI7pQF2yHceSZfDxxbnIsARR8H4',
};

module.exports = {
  userMock,
  tokenMock,
  sellersMock,
};
