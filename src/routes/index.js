const { Router } = require('express')
const { viewsRouter } = require('./views.route.js');
const { productsRouter } = require('./apis/products.route.js');
const { cartsRouter } = require('./apis/cart.route.js');
const { MessageMongo } = require('../daos/mongo/message.daomongo.js');

const router = Router()
const messages = new MessageMongo();

// definiendo vistas
router.use('/', viewsRouter);

// FIXME: arreglar este delete
// definiendo la API
router.use('/api/products/', productsRouter);
router.use('/api/carts/', cartsRouter);
router.delete('/api/messages', async (req, res) => {
  await messages.clearMessages();
  res.status(200).json({
    status: 'ok',
  });
})
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error de server');
});

module.exports = router