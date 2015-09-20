var express = require('express');
var path = require('path');
var compression = require('compression');
var bodyParser = require('body-parser');


var apiRouter = require('./routes/v1/api');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 86400000 }));
app.use(compression());

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'content-type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
	next();
});

app.use('/api/v1/', apiRouter);

module.exports = app;
