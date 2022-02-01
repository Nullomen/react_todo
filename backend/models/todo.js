const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: { type: String, required: true, max: 100 },
  isChecked: {type: Boolean, default: false}
});

module.exports = mongoose.model('Todo', TodoSchema);
