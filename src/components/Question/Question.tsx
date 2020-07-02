import React, { useState, FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import questionsDB from "../../questions.json";
import "./Question.css";

interface State {
  title: string;
  url: string;
}

// interface Question {
//   javascript: {};
//   react: {};
//   question1: {};
//   question2: {};
//   code: string;
//   question: string;
//   choix: string[];
//   reponse: string;
//   explication: string;
// }

export const Question: FunctionComponent = () => {
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  // ! équivalent à || quelque chose
  const { title, url }: State = JSON.parse(localStorage.getItem("state")!);

  useEffect(() => {
    const filterSubject: any = questionsDB.filter((subject: any) => subject[title]);
    const formatSubject: any = [filterSubject[0][title]];
    const question = "question" + numberQuestion;
    const selectQuestion = formatSubject.map((numberQuestion: any) => numberQuestion[question]);

    setCurrentQuestion(selectQuestion);
  }, [numberQuestion, title]);

  const handleClick = (response: string) => {
    // si je clique je passe en true avec un state et modifier le render pour afficher les explications
  };

  return (
    <div>
      <Link to="/">
        <h5 className="Question_title_home">TU CONNAIS ?</h5>
        <img src={url} alt={title} />
      </Link>

      <div className="Question_center_content">
        {currentQuestion.map(({ question, choix }: any) => {
          return (
            <div key={question}>
              <h1 className="Question_title">{question}</h1>
              <div key={question} className="Question_button">
                {choix.map((choixResponse: string) => (
                  <button key={choixResponse} className="Question_button" onClick={() => handleClick(choixResponse)}>
                    {choixResponse}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
