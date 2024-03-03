import React, { useEffect, useMemo, useState} from 'react';
import {fetchGoals} from '../../services/httpUtils';
import ReactApexChart from 'react-apexcharts';

export const GoalsScreen = () => {
  const [goals, setGoals] = useState([]);

  const fetchAndSetGoals = async () => {
    const data = await fetchGoals();
    setGoals(data);
  };

  useEffect(() => {
    fetchAndSetGoals();
  }, []);

  const calculatedTotalCostByType = useMemo(() => {
    const totalCostByType = {};

    goals.forEach((goal) => {
      if (totalCostByType[goal.goalType]) {
        totalCostByType[goal.goalType] += goal.cost;
      } else {
        totalCostByType[goal.goalType] = goal.cost;
      }
    });

    return totalCostByType;
  }, [goals]);

  const settings = {
    series: Object.values(calculatedTotalCostByType),
    options: {
      chart: {
        type: 'pie',
      },
      labels: Object.keys(calculatedTotalCostByType),
    },
  };

  return (
    <>
      <h1>Goals</h1>
      <div id="chart">
        <ReactApexChart options={settings.options} series={settings.series} type="pie" width={600}/>
      </div>
      <table>
        <thead>
        <tr>
          <th>Type</th>
          <th>Cost</th>
          <th>Date of Occurrence</th>
          <th>Description</th>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
        {goals.map((goal) => (
          <tr key={goal.id}>
            <td>{goal.type}</td>
            <td>{goal.cost}</td>
            <td>{goal.dateOfOccurrence}</td>
            <td>{goal.description}</td>
            <td>{goal.goalType}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};
