import React, {useEffect, useState} from 'react';
import {fetchGoals} from '../../services/httpUtils';
import {GoalsChart} from "./goals-chart";
import {GoalsTable} from "./goals-table";

export const GoalsScreen = () => {
  const [goals, setGoals] = useState([]);

  const fetchAndSetGoals = async () => {
    const data = await fetchGoals();
    setGoals(data);
  };

  useEffect(() => {
    fetchAndSetGoals();
  }, []);

  return (
    <>
      <h1>Goals</h1>
      <GoalsChart goals={goals} />
      <GoalsTable goals={goals} />
    </>
  );
};
