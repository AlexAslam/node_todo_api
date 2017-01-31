const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
	check:{
		type:Boolean,
		required:true
	},
	title:{
		type:String,
		required:true
	},
	complete:{
		type:Boolean,
		required:true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});
const Todo = module.exports = mongoose.model('Todo',todoSchema);

module.exports.getTodo = function(callback,limit){
	Todo.find(callback).limit(limit);
};

module.exports.addTodo = function(todo,callback){
	Todo.create(todo,callback);
};

module.exports.getTodoById = function(id,callback){
	Todo.create(todo,callback);
};