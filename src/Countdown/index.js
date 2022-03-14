import { number } from "prop-types";
import React from "react";
import "./styles.css";
import useCounter from "../useCounter";

export default function CountDown({ initialCount = 100, step = -1 }) {
  const [count, { increment: decrement, reset }] = useCounter(
    initialCount,
    step
  );

  return (
    <>
      <h2>The final countdown</h2>
      <p className="countdown-number">{count}</p>
      <div className="countdown-command">
        <button className="countdown-button" onClick={decrement}>
          Decrement
        </button>
        <button className="countdown-button" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}

CountDown.propTypes = {
  initialCount: number,
  step: number,
};
