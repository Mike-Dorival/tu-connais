import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { ScoreAndEndMessage } from "./ScoreAndEndMessage";

test("should show end message", () => {
  //given
  const score = 6;
  const lengthAllQuestions = 6;
  // when
  render(<ScoreAndEndMessage endMessage="Fin du test" score={score} lengthAllQuestions={lengthAllQuestions} />);
  // then
  const CheckEndMessage = screen.getByText(/Fin du test/);
  expect(CheckEndMessage).toBeInTheDocument();
});

test("should show score", () => {
  render(<ScoreAndEndMessage endMessage="Fin du test" score={5} lengthAllQuestions={6} />);
  const findEndMessage = screen.getByText(/5/);

  expect(findEndMessage).toBeInTheDocument();
});

test("should show lengthAllQuestions", () => {
  render(<ScoreAndEndMessage endMessage="Fin du test" score={5} lengthAllQuestions={6} />);
  const findEndMessage = screen.getByText(/6/);

  expect(findEndMessage).toBeInTheDocument();
});
