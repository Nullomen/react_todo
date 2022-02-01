const express = require('express');
const router = express.Router();
const todo = require('../controllers/todo');

router.post('/addtodo', todo.create);
router.get('/gettodos', todo.list);
router.delete('/deleteAll', todo.deleteAll);
router.delete('/deleteChecked', todo.deleteChecked);
router.delete('/deleteTodo', todo.deleteTodo)
router.put('/checkAll', todo.checkAll);
router.put('/toggleTodo', todo.toggleTodo);

module.exports = router;