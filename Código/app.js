const express = require('express');
const path = require('path');

const app = express();

const publicPath= path.resolve(__dirname, './public')
app.use(express.static(publicPath)); //tener carpeta public como recurso estático para poder usar sus elementos de manera sencilla

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/carrito.html', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/carrito.html'));
});

app.get('/vistaProducto.html', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/vistaProducto.html'));
});

app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000')
});

