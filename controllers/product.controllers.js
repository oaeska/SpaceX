const productsModel = require('../models/product.model');
const products = require('../data/products.json');

const productController ={
    home: function(req,res){
        return res.status(200).render('home');
    },

    agregarProductoView: function(req,res){
        return res.status(200).render('product/agregarProducto');
    },

    modificarProductoView: function(req,res){
        return res.status(200).render('product/modificarProducto');
    },

    carritoView: function(req,res){
        return res.status(200).render('product/carrito');
    },

    listaProductosView: function(req,res){
        console.log(products);
        return res.status(200).render('product/listaProductos', {products});
    },

    vistaProductoView: function(req,res){
        console.log(products);
        const productId = req.params.id;
        console.log("ID encontrado:");
        console.log(productId);
        const product = productsModel.findById(productId);
        console.log("info producto:");
        console.log(product);
        return res.status(200).render('product/vistaProducto', {product});
    },
}


module.exports = productController;