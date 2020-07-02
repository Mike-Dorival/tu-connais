import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="center_container">
        <h1 className="Home_title">TU CONNAIS ?</h1>
        <h4>orienté javascript</h4>
        <h2 className="Home_subtitle">
          Se tester, apprendre et comprendre, <br /> voila le but de ce quiz
        </h2>
        <Link to="/choice">
          <button>ENTRER</button>
        </Link>
      </div>
    </div>
  );
};
