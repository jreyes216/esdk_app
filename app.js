var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');



var app = express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname,'bower_components')));
app.use(bodyParser());

var todoItem = [
	{id: 1, desc:'foo'},
	{id: 1, desc:'bar'},
	{id: 1, desc:'baz'}
]

app.get('/',function(req,res){
	res.render('index', {
		title: 'My App',
		items: todoItem
	});
});

app.post('/add', function(req,res){
	var newItem = req.body.newItem;

	todoItem.push({
		id: todoItem.length+1,
		desc: newItem
	});

	res.redirect('/');
});


////

////
var port = process.env.PORT || 3000;

app.listen(port,function(){
	console.log('connected'+port);
});