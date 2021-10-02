const router = require('express-promise-router')();

const cart = require('../controllers/cart.controller');

router.post('/:id', cart.addItemToCart);
router.get('/:id', cart.getCart);
router.delete('/empty-cart', cart.emptyCart);
router.delete('/:userId/:productId', cart.deleteItem);
router.patch('/:userId', cart.minusQuantity);

module.exports = router;
