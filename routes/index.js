var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controllers');
const productController = require('../controllers/product.controllers');

router.get('/', productController.home);

router.get('/agregar', productController.agregarProductoView);
router.get('/modificar', productController.modificarProductoView);
router.get('/carrito', productController.carritoView);
router.get('/lista', productController.listaProductosView);
router.get('/producto/:id', productController.vistaProductoView);

router.get('/login', userController.loginView);
router.get('/nueva-cuenta', userController.crearCuentaView);

module.exports = router;