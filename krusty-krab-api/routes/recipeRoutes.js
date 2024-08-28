const express = require('express');
const Recipe = require('../models/Recipe');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

// Create a new recipe
router.post('/', authenticate, async (req, res) => {
  const { name, description, price, ingredients } = req.body;
  const recipe = new Recipe({ name, description, price, ingredients });
  await recipe.save();
  res.status(201).send('Recipe added');
});

// Get all recipes
router.get('/', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

// Update a recipe
router.patch('/:id', authenticate, async (req, res) => {
  const { name, description, price, ingredients } = req.body;
  await Recipe.findByIdAndUpdate(req.params.id, { name, description, price, ingredients });
  res.send('Recipe updated');
});

// Delete a recipe
router.delete('/:id', authenticate, async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.send('Recipe deleted');
});

module.exports = router;
