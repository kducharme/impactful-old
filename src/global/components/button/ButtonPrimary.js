import React from "react";

export const ButtonPrimary = props => (
  <button
    className={`button__primary ${props.style}`}
    onClick={props.event}
  >
    {props.text}
  </button>
);
