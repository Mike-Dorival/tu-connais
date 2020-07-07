import React, { FC } from "react";
import { Link } from "react-router-dom";

interface MessageProps {
  endMessage: string;
  score: number;
  lengthAllQuestions: number;
}

export const ScoreAndEndMessage: FC<MessageProps> = ({ endMessage, score, lengthAllQuestions }) => {
  return (
    <div className="question-center-content-msg">
      <h1>{endMessage}</h1>
      <h3>
        Votre score : {score}/{lengthAllQuestions}
      </h3>
      <Link to="/choice">
        <button>Sélectionner un autre test</button>
      </Link>
    </div>
  );
};
