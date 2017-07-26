const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json({type: '*/*'}))

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
console.log('Server is listening on ' + port);