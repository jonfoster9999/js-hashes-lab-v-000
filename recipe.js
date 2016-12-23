'use strict';

function addIngredient(recipe, ingredient, amount){
  recipe[ingredient] = amount;
  return recipe;
}

function removeIngredient(recipe, ingredient) {
  delete recipe[ingredient];
  return recipe;
}

function updateIngredient(recipe, ingredient, amount) {
  recipe[ingredient] = amount;
  return recipe;
}

function readRecipe(myRecipe) {
  for (var key in myRecipe) {
    console.log("this recipe calls for " + myRecipe[key] + " of " + key)
  }
}
