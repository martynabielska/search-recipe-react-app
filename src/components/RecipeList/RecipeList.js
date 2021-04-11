import React from "react";
import RecipeListElement from "../RecipeListElement/RecipeListElement";
import "./RecipeList.css";

const RecipeList = (props) => {
  const { recipes, loadSixMoreRecipes } = props;

  const renderLoadMoreBtn = () => (
    <>
      {recipes.length === 0 ? null : (
        <button className="search-button" onClick={loadSixMoreRecipes}>
          load six more...
        </button>
      )}
    </>
  );

  return (
    <div className="recipeList__wrapper">
      <ul className="recipeList__ul">
        {recipes.map((elem) => {
          return (
            <li key={elem.id} className="recipeElement__wrapper">
              <RecipeListElement {...elem} elem={elem} />;
            </li>
          );
        })}
      </ul>
      {renderLoadMoreBtn()}
    </div>
  );
};

export default RecipeList;
