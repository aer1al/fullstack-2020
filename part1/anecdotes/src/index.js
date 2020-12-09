import React, { useState } from "react";
import ReactDOM from "react-dom";

const Heading = ({ title }) => <h1>{title}</h1>;
const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Anecdotes = ({ selected, votes }) => {
  return (
    <>
      <div>
        {anecdotes[selected]}
        <br />
        has {votes[selected]} votes
      </div>
    </>
  );
};

const MostVoted = ({ hasVoted, index, votes }) => {
  if (hasVoted) {
    return <Anecdotes selected={index} votes={votes} />;
  }
  return <p>You must vote first</p>;
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0));
  const [hasVoted, setHasVoted] = useState(false);
  const [index, setIndex] = useState(0);

  const nextAnecdote = () => {
    const randomInt = () => Math.floor(Math.random() * anecdotes.length);
    setSelected(randomInt);
  };

  const addVote = (newVotes) => {
    newVotes[selected] += 1;
    setVote(newVotes);
  };
  const getMostVoted = (newVotes) => {
    const mostVoted = Math.max(...newVotes);
    const newIndex = newVotes.indexOf(mostVoted);
    setIndex(newIndex);
  };
  const handleVote = () => {
    const newVotes = [...votes];
    addVote(newVotes);
    getMostVoted(newVotes);
    setHasVoted(true);
  };

  return (
    <>
      <Heading title="Anecdote of the Day" />
      <Anecdotes anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button text="vote" handleClick={handleVote} />
      <Button text="next anecdote" handleClick={nextAnecdote} />
      <Heading title="Anecdote with most votes" />
      <MostVoted hasVoted={hasVoted} index={index} votes={votes} />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
