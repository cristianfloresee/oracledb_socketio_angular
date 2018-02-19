'use strict'

var server = require('./app');
var server_port = process.env.PORT || 3000; 

//CONEXIÓN A LA DB

    //CREAR SERVIDOR
    server.listen(server_port, ()=> {
        console.log("Webserver listening on http://localhost:" + server_port);
    })

/*

//oracledb.Promise = global.Promise;
//oracledb.connect('')


io.on('connection', function(socket){
    socket.on('nuevo usuario', function(usuario,callback){
        if(usuario.indexOf(usuario) != -1){
            callback(false);
        }
        else{
            callback(true);
            socket.usuario = usuario;
            usuarios.push(usuario);
        }
    })
})*/