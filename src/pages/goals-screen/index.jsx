import React, {useEffect, useState} from 'react';
import {GoalsChart} from "./goals-chart";
import {GoalsTable} from "./goals-table";
import AddGoalForm from "./add-goal-form";
import {fetchGoals} from "../../api/http-utils/goals";

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
      <GoalsTable goals={goals} onDelete={fetchAndSetGoals}/>
      <AddGoalForm onSuccess={fetchAndSetGoals}/>
    </>
  );
};
