import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-the-app-wrapper-img">
      <div className="about-the-app-wrapper">
        <div className="about-the-app">About the app</div>

        <p className="about-text">
          The Search Recipe application allows you to search the database for
          several recipes selected by the user, as well as it gives you the
          ability to load additional amounts of data. The application displays
          detailed data about the recipe, such as: the photo, preparation time,
          number of portions and the link to the original recipe.
        </p>
      </div>
    </div>
  );
};

export default About;
