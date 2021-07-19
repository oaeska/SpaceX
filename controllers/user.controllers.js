const userModel = require('../models/user.model');

const userController={
    loginView:function(req, res){
        return res.status(200).render('user/login');
    },

    crearCuentaView: function(req, res){
        return res.status(200).render('user/crearCuenta');
    }
}

module.exports = userController;