import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1. Loading recipe
    await model.loadRecipe(id);

    //2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // 1. get the search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2. Load query results
    await model.loadSearchResults(query);

    // 3. Render results
    resultsView.render(model.getSearchResultsPage());

    // 4. Render pagination bttns
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (page) {
  // 1. Render the NEW results
  resultsView.render(model.getSearchResultsPage(page));

  // 2. Render the NEW pagination bttns
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
