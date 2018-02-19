'use strict'

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
//var public_dir = express.static('client');
//var database = require('./database.js');


var usernames = {};
var num_users = 0;
var num_connections = 0;


//CARGAR RUTAS
var user_routes = require('./routes/user')

//CARGAR MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false })); //EN CADA PETICIÓN SE EJECUTARÁ ESTE MIDDLEWARE
app.use(bodyParser.json()); //CONVIERTE LA INFO QUE RECIBA EN PETICIÓN A JSON
//app.use(public_dir); //ES COMO NUESTRO HTDOCS O DIRECTORIO PUBLICO


//CORS

//RUTAS
app.use('/api', user_routes);

var messages = [{
    id: 1,
    message: 'Bienvenido',
    nickname: 'Bot'
}]


io.on('connection', (socket) => {
    var addedUser = false; //PARA SABER SI EL USUARIO SE AGREGA A LA LISTA O NO

    num_connections++;
    console.log("\nuser ip " + socket.handshake.address + " has connected...\nconnected users: ", num_connections);
    socket.emit('connect users', { 'connected_users': num_connections });
    socket.broadcast.emit('connect users', { 'connected_users': num_connections });

    //socket.emit('messages', messages);

    /*socket.on('add-message', (data) => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });*/

    //ESCUCHA CUANDO EL CLIENTE EMITE UN NUEVO MENSAJE
    socket.on('new message', (data) => {
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });
    })

    //ESCUCHA CUANDO LLEGA UN USUARIO
    socket.on('exists user', (username, cb) => {
        if (usernames.hasOwnProperty(username)) {
            console.log('User already exists!');
            cb(false);//??
        }
        else {
            console.log('User don\'t exist!');
            cb(true);//??
        }
    });


    socket.on('add user', (username) => {
        // we store the username in the socket session for this client
        socket.username = username;
        // add the client's username to the global list
        usernames[username] = username;
        num_users++;
        addedUser = true;
        socket.emit('login', {
            numUsers: numUsers
        });
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });


    socket.on('disconnect', () => {
        num_connections--;
        console.log('\nuser disconnected...\nconnected users:', num_connections);
        socket.broadcast.emit('connect users', { 'connected_users': num_connections });


        //ELIMINA AL USUARIO DE LA LISTA DE USUARIOS
        if (addedUser) {
            delete usernames[socket.username];
            num_users--;
            console.log("user ", socket.username, " disconnected...");

            //AVIZA GLOBALMENTE QUE EL USUARIO HA DEJADO LA CONEXIÓNf
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    })

})

//EXPORTAR
module.exports = server;