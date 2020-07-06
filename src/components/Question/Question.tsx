import React, { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";

import questionsDB from "../../questions.json";
import { ShowResponseAndExplanation } from "./ShowResponseAndExplanation/ShowResponseAndExplanation";
import { ShowScoreAndEndMsg } from "./ShowScoreAndEndMsg/ShowScoreAndEndMsg";
import { ShowQuestion } from "./ShowQuestion/ShowQuestion";
import { goodOrBadResponse } from "../../helpers/goodOrBadResponse";

import "./Question.css";

interface State {
  title: string;
  url: string;
}

interface Question {
  id: number;
  code: string;
  question: string;
  choix: string[];
  reponse: string;
  explication: string;
}

export const Question: FC = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<Question[]>([]);

  const [lengthAllQuestions, setLengthAllQuestions] = useState(0);
  const [response, setResponse] = useState("");

  const [score, setScore] = useState(0);
  const [endTestMessage, setEndTestMessage] = useState("");
  // ! équivalent à || quelque chose ex {}
  const { title, url }: State = JSON.parse(localStorage.getItem("state")!);

  useEffect(() => {
    const filterSubject: any[] = questionsDB.filter((subject: any) => subject[title]);
    const formatSubject = [filterSubject[0][title]];

    const lengthAllQuestions = Object.keys(formatSubject[0]).length;
    const question = `question${questionNumber}`;

    const selectQuestion = formatSubject.map((questionNumber) => questionNumber[question]);

    setLengthAllQuestions(lengthAllQuestions);
    setCurrentQuestion(selectQuestion);
  }, [questionNumber, title]);

  const checkResponse = (response: string) => {
    const checkGoodOrBadResponse = Object.values(goodOrBadResponse);
    const goodResponse: string = currentQuestion[0].reponse === response ? checkGoodOrBadResponse[0] : checkGoodOrBadResponse[1];

    if (goodResponse === "Bonne réponse") {
      setScore(score + 1);
    }

    setResponse(goodResponse);
  };

  const nextQuestion = () => {
    if (questionNumber === lengthAllQuestions) {
      setResponse("");
      setEndTestMessage("Fin du test");
    }
    setQuestionNumber(questionNumber + 1);
    setResponse("");
  };

  return (
    <div>
      <Link to="/">
        <div className="question-center-header">
          <h5 className="question-title-home">TU CONNAIS ?</h5>
          <img className="question-size-image" src={url} alt={title} />
        </div>
      </Link>

      <div className="question-center-content">
        {response.length ? (
          currentQuestion.map(({ id, explication, reponse }) => (
            <ShowResponseAndExplanation key={id} checkResponse={response} nextQuestion={nextQuestion} explication={explication} response={reponse} />
          ))
        ) : endTestMessage.length ? (
          <ShowScoreAndEndMsg endMsg={endTestMessage} score={score} lengthAllQuestions={lengthAllQuestions} />
        ) : (
          currentQuestion.map(({ id, question, choix, code }) => (
            <ShowQuestion key={id} question={question} choix={choix} code={code} checkResponse={checkResponse} />
          ))
        )}
      </div>
    </div>
  );
};
