const express = require('express');
const path = require('path');

const app = express();

const publicPath= path.resolve(__dirname, './public')
app.use(express.static(publicPath)); //tener carpeta public como recurso estático para poder usar sus elementos de manera sencilla

app.get('/' || '/views/home.html', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/views/carrito.html', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/carrito.html'));
});

app.get('/views/vistaProducto.html', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/vistaProducto.html'));
});

app.get('/views/ingresar.html', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/ingresar.html'));
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
});

