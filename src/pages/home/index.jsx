import React, { useState } from 'react';
import {fetchGoals} from "../../services/httpUtils";
import {Link} from "react-router-dom";

export const Home = () => {
  const [goals, setGoals] = useState([]);

  const handleGetGoals = async () => {
    const data = await fetchGoals();
    setGoals(data);
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleGetGoals}>Get Goals</button>
      <Link to="/goals">See goals screen</Link>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>cost: {goal.cost} and dateOfOccurrence: {goal.dateOfOccurrence}</li>
        ))}
      </ul>
    </>
  );
};
