const express = require('express');
const server = express();
const path = require('path');

server.use('/css', express.static(path.resolve(__dirname, './dist/css')));
server.use('/js', express.static(path.resolve(__dirname, './dist/js')));
server.use('/img', express.static(path.resolve(__dirname, './dist/img')));
server.use('/favicon.ico', express.static(path.resolve(__dirname, './dist/favicon.ico')));
