const path = require('path');
const Todo = require('../models/todo');

exports.create = async function (req, res) {
  const newTodo = new Todo( {text: req.query.text} );
  console.log('Function create: ', newTodo);
  try {
    await newTodo.save();
    res.send(newTodo);
  } catch {
    res.status(400).send('Unable to save todo to database');
  }
};

exports.list = async function (req, res) {
  try {
    const list = await Todo.find({});
    res.send(list);
  } catch {
    res.send(500, err).send('Cannot return todo list');
  }
};

exports.deleteAll = async function (req, res) {
  try {
    const list = await Todo.deleteMany({});
    res.send(list);
  } catch {
    res.status(400).send('Cannot delete all todos into database');
  }
};

exports.deleteChecked = async function (req, res) {
  try {
    const list = await Todo.deleteMany({ isChecked: true });
    res.send(list)
  } catch {
    res.status(400).send('Cannot delete checked todos into database');
  }
}

exports.deleteTodo = async function (req, res) {
  try {
    const item = await Todo.findByIdAndRemove(req.query.id);
    res.send(item);
  } catch {
    res.status(400).send('Cannot delete todo');
  }
};

exports.toggleTodo = async function (req, res) {
  try {
    const fieldChecked = await Todo.findById(req.query.id);
    const item = await Todo.findByIdAndUpdate(req.query.id, { isChecked: !fieldChecked.isChecked }, { new: true });
    res.send(item);
  } catch {
    res.status(400).send('Cannot toggle todo');
  }
};

exports.checkAll = async function (req, res) {
  try {
    const list = await Todo.updateMany({ isChecked: false }, { isChecked: true });
    res.send(list);
  } catch {
    res.status(400).send('Cannot check all todos');
  }
};
