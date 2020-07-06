import React, { FC } from "react";
import { Link } from "react-router-dom";

interface ShowMsgProps {
  endMsg: string;
  score: number;
  lengthAllQuestions: number;
}

export const ShowScoreAndEndMsg: FC<ShowMsgProps> = ({ endMsg, score, lengthAllQuestions }) => {
  return (
    <div className="question-center-content-msg">
      <h1>{endMsg}</h1>
      <h3>
        Votre score : {score}/{lengthAllQuestions}
      </h3>
      <Link to="/choice">
        <button>Séléctionner un autre test</button>
      </Link>
    </div>
  );
};
