var express = require('express');
var path = require('path');
var argv = require('yargs').argv;

var port = argv.port || process.env.PORT || 3000;

var app = express();

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(port);
