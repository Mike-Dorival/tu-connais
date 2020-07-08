import React, { FC, useCallback } from "react";
import { findLineBreaker } from "../../../helpers/findTextLineBreaker";

interface QuestionProps {
  question: string;
  choices: string[];
  code: string;
  checkAnswer: (answer: string) => void;
}

export const Question: FC<QuestionProps> = ({ question, choices, code, checkAnswer }) => {
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
        {choices.map((choice: string) => (
          <button key={choice} className="question-button" onClick={() => check(choice)}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};
