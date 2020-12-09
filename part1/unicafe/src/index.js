import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const getAverage = () => {
    const avgScore = good + neutral * 0 + bad * -1;
    return avgScore / total;
  };
  const average = getAverage();

  const getPercentage = () => (good / total) * 100;
  const percentage = `${getPercentage()} %`;
  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      {total ? (
        <>
          <Statistics text="good" value={good} />
          <Statistics text="neutral" value={neutral} />
          <Statistics text="bad" value={bad} />
          <Statistics text="all" value={total} />
          <Statistics text="average" value={average} />
          <Statistics text="positive" value={percentage} />
        </>
      ) : (
        "No feedback given"
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
