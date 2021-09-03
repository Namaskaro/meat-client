const router = require("express-promise-router")();

const cart  = require("../controllers/cart.controller");



router.post("/", cart.addItemToCart);
router.get("/", cart.getCart);
router.delete("/empty-cart", cart.emptyCart);

module.exports = router;