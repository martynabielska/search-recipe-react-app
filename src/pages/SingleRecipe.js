import React from "react";
import { baseImageUrl } from "../utils/baseImgUrl";
import "./SingleRecipe.css";

const SingleRecipe = (props) => {
  const {
    title,
    image,
    readyInMinutes,
    servings,
    sourceUrl,
  } = props.location.state;

  return (
    <>
      <div className="single-recipe-wrapper">
        <div className="single-recipe_wrapper">
          <img
            className="single-recipe-img"
            src={`${baseImageUrl}${image}`}
            alt={title}
          />

          <div className="single-recipe-desc-wrapper">
            <h2 className="single-recipe-title">{title}</h2>
            <h5 className="single-recipe-desc">Servings:{servings}</h5>
            <h5 className="single-recipe-desc">{readyInMinutes}min</h5>
            <a
              className="single-recipe-link"
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              link to page
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRecipe;
