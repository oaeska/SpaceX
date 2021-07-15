var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controllers');
const productController = require('../controllers/product.controllers');

/*** GET ALL PRODUCTS ***/
router.get('/lista', productController.listaProductosView);

/*** CREATE ONE PRODUCT ***/
router.get('/agregar', productController.agregarProductoView);
router.post('/', productController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/producto/:id', productController.vistaProductoView);

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productController.modificarProductoView);
router.put('/:id', productController.update); 

/*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', productController.delete); 

/*** CARRITO DE COMPRAS***/
router.get('/carrito', productController.carritoView);







module.exports = router;