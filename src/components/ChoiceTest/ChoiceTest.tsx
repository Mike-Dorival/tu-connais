import React, { useCallback, FC } from "react";
import { Link } from "react-router-dom";
import "./ChoiceTest.css";

export const ChoiceTest: FC = () => {
  const handleClick = useCallback((e) => {
    const { title, src } = e.target;
    localStorage.setItem("state", JSON.stringify({ title, url: src }));
  }, []);

  return (
    <div>
      <Link to="/">
        <h5 className="choice-test-title-home">TU CONNAIS ?</h5>
      </Link>

      <h1 className="choice-test-title">
        Choisissez votre sujet <br /> sur lequel vous testez
      </h1>
      <div className="choice-test-gallery">
        <div onClick={handleClick}>
          <Link to={`question/${Date.now()}`}>
            <img
              title="js"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              alt="logo_javascript"
              height="200"
            />
          </Link>
        </div>
        <div onClick={handleClick}>
          <Link to={`question/${Date.now()}`}>
            <img
              title="react"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png"
              alt="logo_react"
            />
          </Link>
        </div>
        <div onClick={handleClick} className="choice-test">
          <Link to={`question/${Date.now()}`} className="choice-test-culture">
            <img title="culture web" src="https://images-na.ssl-images-amazon.com/images/I/51USpXI-iRL.jpg" alt="logo_culture_web" height="200" />
          </Link>
        </div>
      </div>
    </div>
  );
};
