import React, { useState } from 'react';
import {fetchGoals} from "../../services/apiService";

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
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>cost: {goal.cost} and dateOfOccurrence: {goal.dateOfOccurrence}</li>
        ))}
      </ul>
    </>
  );
};
