import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { AnswerAndExplanation } from "./AnswerAndExplanation";

test("should be not null props checkAnswer", () => {
  render(<AnswerAndExplanation checkAnswer="non" explanation="ceci est un test" nextQuestion={() => null} answer="non" />);
  const CheckAnswer = screen.getByText("non");

  expect(CheckAnswer).toBeInTheDocument();
});

test("should be click 1 time", () => {
  const mockNextQUestion = jest.fn();
  render(<AnswerAndExplanation checkAnswer="non" explanation="ceci est un test" nextQuestion={mockNextQUestion} answer="non" />);

  fireEvent.click(screen.getByText("Prochaine question"));
  expect(mockNextQUestion.mock.calls.length).toBe(1);
});
