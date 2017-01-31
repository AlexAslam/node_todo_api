var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
Todo = require('../models/todo.js');

/* GET index introduction. */
router.get('/', function(req, res, next) {
		Todo.getTodo(function(err,todo){
			if(err){
				throw err;
			}else{
				res.json(todo);
			}
		});
});

router.post('/',function(req,res,next){
	var todo = req.body;
	Todo.addTodo(todo,(err,todo1)=>{
		if(err){
			throw err;
		}else{
			res.json(todo1);
		}
	});
});

module.exports = router;
