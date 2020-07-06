import React, { FC } from "react";
import { goodOrBadResponse } from "../../../helpers/goodOrBadResponse";

interface ShowResponseAndExplanationProps {
  checkResponse: string;
  explication: string;
  response: string;
  nextQuestion: () => void;
}

export const ShowResponseAndExplanation: FC<ShowResponseAndExplanationProps> = ({ checkResponse, explication, nextQuestion, response }) => {
  const checkGoodOrBadResponse = Object.values(goodOrBadResponse);
  const findLineBreaker = explication
    .split("\n")
    .map((item, index) => (
      <h3 className="question-subtitle" key={index}>
        {item} <br />
      </h3>
    ))
    .map((text) => text.props.children);

  return (
    <div>
      <h1 className="question-title">{checkResponse}</h1>
      {checkResponse === checkGoodOrBadResponse[1] ? <h3 className="question-subtitle"> La réponse était {response} </h3> : null}
      <p className="question-paragraph">Explication : {explication.includes("\n") ? findLineBreaker : explication}</p>
      <button onClick={() => nextQuestion()}>Prochaine question</button>
    </div>
  );
};
