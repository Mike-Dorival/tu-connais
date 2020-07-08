import React from "react";

export const findLineBreaker = (text: string) => {
  return text
    .split("\n")
    .map((item: string, index: number) => (
      <h3 className="question-subtitle" key={index}>
        {item} <br />
      </h3>
    ))
    .map((text) => text.props.children);
};
