var express = require('express');

var router = express.Router();

var todoItem = [
	{id: 1, desc:'foo'},
	{id: 1, desc:'bar'},
	{id: 1, desc:'baz'}
]

router.get('/',function(req,res){
	res.render('index', {
		title: 'My App',
		items: todoItem
	});
});

router.post('/add', function(req,res){
	var newItem = req.body.newItem;

	todoItem.push({
		id: todoItem.length+1,
		desc: newItem
	});

	res.redirect('/');
});

module.export = router;