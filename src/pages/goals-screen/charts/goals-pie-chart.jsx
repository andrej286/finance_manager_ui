import React, { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import {goalTypeTexts} from "../constants";

export const GoalsPieChart = ({ goals }) => {
  const calculatedTotalCostByType = useMemo(() => {
    const totalCostByType = {};

    goals.forEach((goal) => {
      if (totalCostByType[goal.goalType]) {
        totalCostByType[goal.goalType] += goal.amount;
      } else {
        totalCostByType[goal.goalType] = goal.amount;
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
      labels: Object.keys(calculatedTotalCostByType).map(goalType => goalTypeTexts[goalType]),
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={settings.options} series={settings.series} type="pie" width={600} />
    </div>
  );
};
