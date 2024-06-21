import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const getRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // renderSpinner(recipeContainer);
    recipeView.renderSpinner();
    // 1. Loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    //2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// getRecipe();
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, getRecipe));
// window.addEventListener('hashchange', getRecipe);
// window.addEventListener('load', getRecipe);
