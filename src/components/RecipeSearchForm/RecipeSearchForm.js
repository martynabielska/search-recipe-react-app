import React from "react";
import "./RecipeSearchForm.css";

const RecipeSearchForm = ({ getRecipes }) => (
  <form className="search-form" onSubmit={getRecipes}>
    <input
      className="contact-form-input"
      type="search"
      name="searchRecipe"
      placeholder="search recipe..."
    />
    <br />

    <label className="text-recipe-number" htmlFor="recipeNumber">
      Choose number of recipes:
    </label>

    <select className="recipe-number" name="recipeNumber" id="recipeNumber">
      <option className="recipe-option" value={6}>
        6
      </option>
      <option className="recipe-option" value={12}>
        12
      </option>
      <option className="recipe-option" value={24}>
        24
      </option>
      <option className="recipe-option" value={48}>
        48
      </option>
    </select>
    <br />

    <button className="button-submit" type="submit">
      Search
    </button>
  </form>
);

export default RecipeSearchForm;
