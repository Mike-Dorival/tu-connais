import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home: FC = () => {
  return (
    <div className="container">
      <div className="center-container">
        <h1 className="home-title">TU CONNAIS ?</h1>
        <h4>orienté javascript</h4>
        <h2 className="home-subtitle">
          Se tester, apprendre et comprendre, <br /> voila le but de ce quiz
        </h2>
        <Link to="/choice">
          <button>ENTRER</button>
        </Link>
      </div>
    </div>
  );
};
