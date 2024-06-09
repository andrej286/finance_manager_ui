import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {formatNumber} from "../../../common/util";
import {useTranslation} from "react-i18next";

export const GoalsScatterChart = ({ goals }) => {
  const {t} = useTranslation();

  goals.sort((a, b) => new Date(a.dateOfOccurrence) - new Date(b.dateOfOccurrence));

  const data = goals.map(goal => ({
    x: new Date(goal.dateOfOccurrence).getTime(),
    y: parseFloat(goal.amount),
  }));

  const settings = {
    series: [{ name: "Goal", data }],
    options: {
      chart: {
        type: 'scatter',
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: function(value) {
            return new Date(value).toLocaleDateString();
          }
        }
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function(value) {
            return formatNumber(value, t('currency'));
          }
        }
      }
    },
  };

  return (
    <div id="chart" >
      <ReactApexChart options={settings.options} series={settings.series} type="scatter" />
    </div>
  );
}
