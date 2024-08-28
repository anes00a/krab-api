const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  ingredients: [String]
});

module.exports = mongoose.model('Recipe', recipeSchema);

