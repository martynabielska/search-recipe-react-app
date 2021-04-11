import React from "react";
import { Link } from "react-router-dom";
import { baseImageUrl } from "../../utils/baseImgUrl";
import "./RecipeListElement.css";

const RecipeListElement = ({ image, title, elem }) => {
  const renderRecipeRedirectImg = () => (
    <Link
      to={{
        pathname: `/singleRecipe/${title.replace(/\s/g, "")}`,
        state: {
          ...elem,
        },
      }}
    >
      <img className="recipe-img" src={`${baseImageUrl}${image}`} alt={title} />
    </Link>
  );

  return (
    <>
      {renderRecipeRedirectImg()}
      <p className="singleRecipe-name">{title}</p>
    </>
  );
};

export default RecipeListElement;
