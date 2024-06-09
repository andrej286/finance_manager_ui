import React, { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import {useTranslation} from "react-i18next";
import {formatNumber} from "../../../common/util";

export const GoalsPieChart = ({ goals }) => {
  const {t} = useTranslation();

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
      labels: Object.keys(calculatedTotalCostByType).map(goalType => t(`section.goal.type.${goalType}`)),
      tooltip: {
        y: {
          formatter: function (value) {
            return formatNumber(value, t('currency'));
          }
        }
      }
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={settings.options} series={settings.series} type="pie" width={600} />
    </div>
  );
};
