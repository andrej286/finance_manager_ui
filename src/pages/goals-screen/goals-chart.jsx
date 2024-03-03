import React, { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';

export const GoalsChart = ({ goals }) => {
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
    <div id="chart">
      <ReactApexChart options={settings.options} series={settings.series} type="pie" width={600} />
    </div>
  );
};
