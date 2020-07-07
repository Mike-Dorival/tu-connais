import React, { FC, useCallback } from "react";
import { findLineBreaker } from "../../../helpers/findTextLineBreaker";

interface QuestionProps {
  question: string;
  choice: string[];
  code: string;
  checkAnswer: (answer: string) => void;
}

export const Question: FC<QuestionProps> = ({ question, choice, code, checkAnswer }) => {
  const check = useCallback(
    (answer: string) => {
      checkAnswer(answer);
    },
    [checkAnswer]
  );

  return (
    <div key={question}>
      <h1 className="question-title">{question}</h1>
      {<h2 className="question-paragraph">{code?.includes("\n") ? findLineBreaker(code) : code}</h2>}
      <div key={question} className="question-content-button">
        {choice.map((choixResponse: string) => (
          <button key={choixResponse} className="question-button" onClick={() => check(choixResponse)}>
            {choixResponse}
          </button>
        ))}
      </div>
    </div>
  );
};
