import React, { FC } from "react";

interface ShowQuestionProps {
  question: string;
  choix: string[];
  code: string;
  checkResponse: (choixResponse: string) => void;
}

export const ShowQuestion: FC<ShowQuestionProps> = ({ question, choix, code, checkResponse }) => {
  const findLineBreaker = code
    ?.split("\n")
    .map((item, index) => (
      <h3 className="question-subtitle" key={index}>
        {item} <br />
      </h3>
    ))
    .map((text) => text.props.children);

  return (
    <div key={question}>
      <h1 className="question-title">{question}</h1>
      {code?.includes("\n") ? <h2 className="question-paragraph">{findLineBreaker}</h2> : null}
      <div key={question} className="question-content-button">
        {choix.map((choixResponse: string) => (
          <button key={choixResponse} className="question-button" onClick={() => checkResponse(choixResponse)}>
            {choixResponse}
          </button>
        ))}
      </div>
    </div>
  );
};
