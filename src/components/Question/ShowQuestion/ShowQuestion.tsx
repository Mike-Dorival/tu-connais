import React, { FunctionComponent } from "react";

interface ShowQuestionType {
  question: string;
  choix: string[];
  code: string;
  checkResponse: (choixResponse: string) => void;
}

export const ShowQuestion: FunctionComponent<ShowQuestionType> = ({ question, choix, code, checkResponse }) => {
  return (
    <div key={question}>
      <h1 className="Question_title">{question}</h1>
      {code ? <h2 className="Question_paragraph" dangerouslySetInnerHTML={{ __html: code }} /> : null}
      <div key={question} className="Question_content_button">
        {choix.map((choixResponse: string) => (
          <button key={choixResponse} className="Question_button" onClick={() => checkResponse(choixResponse)}>
            {choixResponse}
          </button>
        ))}
      </div>
    </div>
  );
};
