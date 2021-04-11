import React, { Component } from "react";
import axios from "axios";
import RecipeSearchForm from "./components/RecipeSearchForm/RecipeSearchForm";
import RecipeList from "./components/RecipeList/RecipeList";
import "./App.css";

class App extends Component {
  state = {
    recipes: [],
    recipeName: "",
    recipeNumber: 6,
    skipRecipes: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.skipRecipes !== this.state.skipRecipes) {
      this.getFiveMoreRecipes();
    }
  }

  getFiveMoreRecipes = () => {
    const { recipeName, recipeNumber, skipRecipes, recipes } = this.state;
    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeName}&number=${recipeNumber}&offset=${skipRecipes}`
      )
      .then((response) => {
        this.setState({
          recipes: [...recipes, ...response.data.results],
        });
      })
      .catch((err) => console.log(err));
  };

  getRecipes = (e) => {
    e.preventDefault();

    const recipeName = e.target.searchRecipe.value;

    const recipeNumber = e.target.recipeNumber.value;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeName}&number=${recipeNumber}&offset=0`
      )
      .then((response) => {
        this.setState({
          recipes: [...response.data.results],
          recipeName,
          recipeNumber,
        });
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

  loadSixMoreRecipes = () => {
    this.setState((prevState) => ({
      skipRecipes: prevState.skipRecipes + 6,
    }));
  };

  render() {
    return (
      <>
        <div className="recipe-wrapper">
          <div className="image-bg">
            <div className="text__wrapper">
              <h1 className="name-app">Recipes App </h1>
              <RecipeSearchForm getRecipes={this.getRecipes} />
            </div>
          </div>
          <RecipeList
            recipes={this.state.recipes}
            loadSixMoreRecipes={this.loadSixMoreRecipes}
          />
        </div>
      </>
    );
  }
}

export default App;
