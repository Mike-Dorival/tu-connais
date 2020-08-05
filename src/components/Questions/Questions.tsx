import React, { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";

import questionsDB from "../../questions.json";

import { AnswerAndExplanation } from "./AnswerAndExplanation/AnswerAndExplanation";
import { ScoreAndEndMessage } from "./ScoreAndEndMessage/ScoreAndEndMessage";
import { Question } from "./Question/Question";

import { Answer } from "../../helpers/answer";

import "./Questions.css";

interface State {
  title: string;
  url: string;
}

interface Question {
  id: number;
  code: string;
  question: string;
  choices: string[];
  answer: string;
  explanation: string;
}

export const Questions: FC = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<Question[]>([]);

  const [lengthAllQuestions, setLengthAllQuestions] = useState(0);
  const [response, setResponse] = useState("");

  const [score, setScore] = useState(0);
  const [endTestMessage, setEndTestMessage] = useState("");
  // ! équivalent à || quelque chose ex {}
  const { title, url }: State = JSON.parse(localStorage.getItem("state")!);

  useEffect(() => {
    const filterSubject = questionsDB.filter(({ type }) => type === title);

    const totalQuestionsNumber = filterSubject[0].questions.length;

    const selectQuestion: any[] = filterSubject[0].questions.filter(({ id }) => id === questionNumber);

    setLengthAllQuestions(totalQuestionsNumber);
    setCurrentQuestion(selectQuestion);
  }, [questionNumber, title]);

  const checkAnswer = (answer: string) => {
    const goodAnswer: string = currentQuestion[0].answer === answer ? Answer.GOOD : Answer.BAD;

    if (goodAnswer === Answer.GOOD) {
      setScore(score + 1);
    }

    setResponse(goodAnswer);
  };

  const nextQuestion = () => {
    if (questionNumber === lengthAllQuestions) {
      setResponse("");
      setEndTestMessage("Fin du test");
    }

    const timer = setTimeout(() => {
      setQuestionNumber(questionNumber + 1);
      setResponse("");
    }, 50);

    return () => clearTimeout(timer);
  };

  const render = () => {
    if (response.length) {
      return currentQuestion.map(({ id, explanation, answer }) => (
        <AnswerAndExplanation key={id} checkAnswer={response} nextQuestion={nextQuestion} explanation={explanation} answer={answer} />
      ));
    }

    if (endTestMessage.length) {
      return <ScoreAndEndMessage endMessage={endTestMessage} score={score} lengthAllQuestions={lengthAllQuestions} />;
    }

    return currentQuestion.map(({ id, question, choices, code }) => (
      <Question key={id} question={question} choices={choices} code={code} checkAnswer={checkAnswer} />
    ));
  };

  return (
    <div>
      <div className="question-center-header">
        <Link to="/">
          <h5 className="question-title-home">TU CONNAIS ?</h5>
        </Link>
        <img className="question-size-image" src={url} alt={title} />
      </div>

      <div className="question-center-content">{render()}</div>
    </div>
  );
};
