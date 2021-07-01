const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

const publicPath= path.resolve(__dirname, './public')
app.use(express.static(publicPath)); //tener carpeta public como recurso estático para poder usar sus elementos de manera sencilla

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
});

