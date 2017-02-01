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
	Todo.addTodo(todo,(err,todo)=>{
		if(err){
			throw err;
		}else{
			res.json(todo);
		}
	});
});


router.get('/:_id',function(req,res,next){
	Todo.getTodoById(req.params._id,(err,todo )=>{
		if(err){
			throw err;
		}else{
			res.json(todo);
		}
	});
});

router.put('/:_id',function(req,res,next){
	Todo.updateTodo(req.params._id,req.body,{},(err,todo )=>{
		if(err){
			throw err;
		}else{
			res.json(todo);
		}
	});
});

module.exports = router;
