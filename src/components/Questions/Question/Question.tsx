import React, { FC, useCallback } from "react";
import { findLineBreaker } from "../../../helpers/findTextLineBreaker";
import path from "path";

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

  const checkFindPng = (code: string) => {
    const findExtension = code?.split(".").pop();

    if (code?.includes("\n")) {
      return <h2 className="question-paragraph">{findLineBreaker(code)}</h2>;
    }

    if (findExtension === "png") {
      console.log("checkFindPng -> code", path.resolve(`${__dirname}${code}`));
      return <img src={`${__dirname}${code}`} alt="screenshot_code" />;
    }

    return <h2 className="question-paragraph">{code}</h2>;
  };

  return (
    <div key={question}>
      <h1 className="question-title">{question}</h1>
      {checkFindPng(code)}
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
