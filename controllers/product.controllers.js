const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.data.json');

const productsModel = require('../models/product.model');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController ={
    home: function(req,res){
        return res.status(200).render('home');
    },

    agregarProductoView: function(req,res){
        return res.status(200).render('product/agregarProducto');
    },

    store: function(req,res){
        try {
            console.log('STORE');
            let infoProducto = req.body;
            console.log(infoProducto);
            productsModel.create(infoProducto);
            res.redirect('/products/lista');
          } catch(err) {
            console.log(err)
            return res
            .status(500)
            .render('error', { message: 'Occurrió un error al crear el producto', status: 500 })
          }
    },

    modificarProductoView: function(req,res){
        const productId = req.params.id;
        const product = productsModel.findById(productId);
        return res.status(200).render('product/modificarProducto', {product});
    },

    update: function(req,res){
        const productId = req.params.id;
        const product = req.body;
        productsModel.update(product, productId);
        res.redirect('/products/lista');
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

    delete: function(req,res){
        const productId = req.params.id;
        productsModel.delete(productId);
        res.redirect('/products/lista');
    }
};


module.exports = productController;