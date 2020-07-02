import React, { useCallback, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./ChoiceTest.css";

export const ChoiceTest: FunctionComponent = () => {
  const handleClick = useCallback((e) => {
    const { title, src } = e.target;
    localStorage.setItem("state", JSON.stringify({ title, url: src }));
  }, []);

  return (
    <div>
      <Link to="/">
        <h5 className="ChoiceTest_title_home">TU CONNAIS ?</h5>
      </Link>

      <h1 className="ChoiceTest_title">
        Choisissez votre sujet <br /> sur le lequel vous testez
      </h1>
      <div className="gallery">
        <div className="item" onClick={handleClick}>
          <Link to={`question/${Date.now()}`}>
            <img title="javascript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png" alt="" />
          </Link>
        </div>
        <div className="item" onClick={handleClick}>
          <Link to={`question/${Date.now()}`}>
            <img title="react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png" alt="" />
          </Link>
        </div>
        <div className="item" onClick={handleClick}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png" alt="" />
        </div>
        <div className="item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png" alt="" />
        </div>
        <div className="item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png" alt="" />
        </div>
        <div className="item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png" alt="" />
        </div>
        <div className="item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png" alt="" />
        </div>
        <div className="item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png" alt="" />
        </div>
      </div>
    </div>
  );
};
