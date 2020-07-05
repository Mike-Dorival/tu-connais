import React, { useState, FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";

import questionsDB from "../../questions.json";
import { ShowResponseAndExplication } from "./ShowResponseAndExplication/ShowResponseAndExplication";
import { ShowScoreAndEndMsg } from "./ShowScoreAndEndMsg/ShowScoreAndEndMsg";
import { ShowQuestion } from "./ShowQuestion/ShowQuestion";

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

export const Question: FunctionComponent<Question> = () => {
  const [numberQuestion, setNumberQuestion] = useState<number>(1);
  const [currentQuestion, setCurrentQuestion] = useState<Array<Question>>([]);

  const [lengthAllQuestions, setLengthAllQuestions] = useState<number>(0);
  const [response, setResponse] = useState<string>("");

  const [score, setScore] = useState<number>(0);
  const [endTestMessage, setEndTestMessage] = useState<string>("");
  // ! équivalent à || quelque chose ex {}
  const { title, url }: State = JSON.parse(localStorage.getItem("state")!);

  useEffect(() => {
    const filterSubject: Array<any> = questionsDB.filter((subject: any) => subject[title]);
    const formatSubject: Array<{}> = [filterSubject[0][title]];

    const lengthAllQuestions: number = Object.keys(formatSubject[0]).length;
    const question: string = "question" + numberQuestion;

    const selectQuestion: Array<any> = formatSubject.map((numberQuestion: any) => numberQuestion[question]);

    setLengthAllQuestions(lengthAllQuestions);
    setCurrentQuestion(selectQuestion);
  }, [numberQuestion, title]);

  const checkResponse = (response: string) => {
    const goodResponse: string = currentQuestion[0].reponse === response ? "Bonne réponse" : "Mauvaise réponse";

    if (goodResponse === "Bonne réponse") {
      setScore(score + 1);
    }

    setResponse(goodResponse);
  };

  const nextQuestion = () => {
    if (numberQuestion === lengthAllQuestions) {
      setResponse("");
      setEndTestMessage("Fin du test");
    }
    setNumberQuestion(numberQuestion + 1);
    setResponse("");
  };

  return (
    <div>
      <Link to="/">
        <div className="Question_center_header">
          <h5 className="Question_title_home">TU CONNAIS ?</h5>
          <img className="Question_size_image" src={url} alt={title} />
        </div>
      </Link>

      <div className="Question_center_content">
        {response.length ? (
          currentQuestion.map(({ id, explication, reponse }) => (
            <ShowResponseAndExplication key={id} checkResponse={response} nextQuestion={nextQuestion} explication={explication} response={reponse} />
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
