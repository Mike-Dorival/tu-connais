import React, { FunctionComponent } from "react";

interface nextQuestion {
  checkResponse: string;
  explication: string;
  response: string;
  nextQuestion: () => void;
}

export const ShowResponseAndExplication: FunctionComponent<nextQuestion> = ({ checkResponse, explication, nextQuestion, response }) => {
  const findLineBreaker = explication
    .split("\n")
    .map((item, i) => (
      <h3 className="Question_subtitle" key={i}>
        {item} <br />
      </h3>
    ))
    .map((text) => text.props.children);

  return (
    <div>
      <h1 className="Question_title">{checkResponse}</h1>
      {checkResponse === "Mauvaise réponse" ? <h3 className="Question_subtitle"> La réponse était {response} </h3> : null}
      <p className="Question_paragraph">Explication : {explication.includes("\n") ? findLineBreaker : explication}</p>
      <button onClick={() => nextQuestion()}>Prochaine question</button>
    </div>
  );
};
