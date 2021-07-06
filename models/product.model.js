
const fs = require('fs');
const products = require('../data/products.json');
const path = require('path');


const productsModel = {

 findById: function(productId) {
    console.log("model:");
    console.log(products);
    console.log(productId);
    const producto = products.find(product => product.id === productId);
    console.log("producto:");
    console.log(producto);
    return producto;
  }

};


module.exports = productsModel;