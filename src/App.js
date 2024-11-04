import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("august 2 2025");
  date.setDate(date.getDate() + count);

  function addStep() {
    setStep((s) => s + 1);
  }

  function minusStep() {
    setStep((s) => s - 1);
  }

  function addCount() {
    setCount((c) => c + step);
  }

  function minusCount() {
    setCount((c) => c - step);
  }

  return (
    <div>
      <div>
        <button onClick={addStep}>+</button>
        <p>Step: {step}</p>
        <button onClick={minusStep}>-</button>
      </div>
      <br />
      <br />
      <br />
      <div>
        <button onClick={addCount}>+</button>
        <p>Count: {count}</p>
        <button onClick={minusCount}>-</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
