var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser());
app.use(express.static(path.join(__dirname,'bower_components')));


////

app.use(require('./todos'));
////
var port = process.env.PORT || 3000;

app.listen(port,function(){
	console.log('connected'+port);
});