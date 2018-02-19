//AQUI VAN LAS CONSULTAS SQL
'use strict'

//var bcrypt = require('bcrypt-nodejs')
var oracledb = require('oracledb');

function pruebas(req, res) {
    console.log(req.body);
    res.status(200).send({
        message: "Acción de pruebas en el servidor de nodejs"
    })
}

//ALMACENAR USUARIO
function postUser(req, res){
    var params = req.body;
    var user = new User();
    if(params.name && params.surname && params.email && params.username && params.password){
        user.name = params.name;
        user.surname = params.surname;
        user.username = params.username;
        user.email = params.email;
        /*bcrypt.hash(params.password, null, null, (error, hash) => {
            user.password = hash;
            
        });*/
    }
    else{
        res.status(200).send({
            message: 'Completa todos los campos'
        });
    }
}



module.exports = {
    pruebas
}