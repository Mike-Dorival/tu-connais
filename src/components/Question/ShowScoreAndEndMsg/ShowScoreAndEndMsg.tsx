import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface ShowMsgType {
  endMsg: string;
  score: number;
  lengthAllQuestions: number;
}

export const ShowScoreAndEndMsg: FunctionComponent<ShowMsgType> = ({ endMsg, score, lengthAllQuestions }) => {
  return (
    <div className="Question_center_content_msg">
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
