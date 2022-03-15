import React from "react";

export default function useCounter(initialCount = 0, max = 10, step = 1) {
  const [count, setCount] = React.useState(initialCount);

  const increment = () => setCount(Math.min(count + step, max));
  const decrement = () => setCount(Math.max(count - step, 0));
  const reset = () => setCount(initialCount);

  return [count, { increment, decrement, reset }];
}
