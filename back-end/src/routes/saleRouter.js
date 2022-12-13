const { Router } = require('express');
const saleController = require('../controller/saleController');
const verifyToken = require('../middlewares/verifyTokenMiddleware');
const restrictAccessByRole = require('../middlewares/restrictAccessByRoleMiddleware');

const saleRouter = Router();

saleRouter.post('/', verifyToken, saleController.insertSale);
saleRouter.get('/history', verifyToken, saleController.findSaleHistory);

saleRouter.put(
  '/:id/processing',
  verifyToken,
  restrictAccessByRole(['seller']),
  saleController.updateStatus('Preparando'),
);
saleRouter.put(
  '/:id/delivering',
  verifyToken,
  restrictAccessByRole(['seller']),
  saleController.updateStatus('Em Trânsito'),
);
saleRouter.put(
  '/:id/delivered',
  verifyToken,
  restrictAccessByRole(['customer']),
  saleController.updateStatus('Entregue'),
);

saleRouter.get('/:id', verifyToken, saleController.findSaleById);

module.exports = saleRouter;
