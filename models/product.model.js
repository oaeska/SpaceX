
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.data.json');

const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsModel = {

 findById: function(productId) {
    console.log("model:");
    console.log(products);
    console.log(productId);
    const producto = products.find(product => product.id === productId);
    console.log("producto:");
    console.log(producto);
    return producto;
  },

  create: function(data){
    let newId = products.length + 1;
    console.log('new Id: ' + newId)
		let newProduct = {
            "id":JSON.stringify(newId),
            "nombre": data.nombre,
            "categoria": data.categoria,
            "precio": data.precio,
            
            "imagen1": "/images/SemillaAgeratumAzul.jpg",
            "imagen2": "/images/AgeratumAzul.jpg",

            "descripcion":  data.descripcion,
            "caracteristicas": data.caracteristicas,
            "cuidados": data.cuidados,
            "usos": data.usos,
            
            "imagenM1": "/images/AgeratumAzul.jpg",
            "imagenM2": "/images/AgeratumAzul.jpg",
            "imagenM3": "/images/AgeratumAzul.jpg"
		}
		products.push(newProduct);
		fs.writeFileSync(productsFilePath,JSON.stringify(products))
  },

  update: function(product, productId){
    let index = products.findIndex(product => product.id == productId);
    product.id=products[index].id;
    product.imagen1 = products[index].imagen1;
    product.imagen2 = products[index].imagen2;
    product.imagenM1 = products[index].imagenM1;
    product.imagenM2 = products[index].imagenM2;
    product.imagenM3 = products[index].imagenM3;
    products.splice(index, 1, product);

    fs.writeFileSync(productsFilePath,JSON.stringify(products));
  },

  delete: function(productId){
    let index = products.findIndex(product => product.id == productId);
    products.splice(index,1);
		fs.writeFileSync(productsFilePath,JSON.stringify(products));
  }
};


module.exports = productsModel;