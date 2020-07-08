import React, { FC, useCallback } from "react";
import { Answer } from "../../../helpers/answer";
import { findLineBreaker } from "../../../helpers/findTextLineBreaker";

interface AnswerAndExplanationProps {
  checkAnswer: string;
  explanation: string;
  answer: string;
  nextQuestion: () => void;
}

export const AnswerAndExplanation: FC<AnswerAndExplanationProps> = ({ checkAnswer, explanation, nextQuestion, answer }) => {
  const check = useCallback(() => nextQuestion(), [nextQuestion]);

  return (
    <div>
      <h1 className="question-title">{checkAnswer}</h1>
      {checkAnswer === Answer.BAD && <h3 className="question-subtitle"> La réponse était {answer} </h3>}
      <p className="question-paragraph">Explication : {explanation.includes("\n") ? findLineBreaker(explanation) : explanation}</p>
      <button onClick={check}>Prochaine question</button>
    </div>
  );
};
