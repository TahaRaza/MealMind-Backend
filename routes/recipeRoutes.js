const express = require('express');
const router = express.Router();
const {
  getAllRecipes,
  getRandomRecipe,
} = require('../controllers/recipeController');

router.get('/', getAllRecipes);

router.get('/random', getRandomRecipe);

module.exports = router;
