import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {useTranslation} from "react-i18next";
import {formatNumber} from "../../common/util";

export const CostsChart = ({ costs }) => {
  const {t} = useTranslation();

  const currentYear = new Date().getFullYear();

  const calculateTotalCosts = () => {
    const totalCosts = Array(5).fill(0);

    costs.forEach((cost) => {
      let startYear = new Date(cost.dateOfPayment).getFullYear();

      switch (cost.costType) {
        case 'ONE_TIME':
          if (startYear >= currentYear && startYear < currentYear + 5) {
            totalCosts[startYear - currentYear] += cost.amount;
          }
          break;
        case 'MONTHLY':
          for (let i = startYear; i < currentYear + 5; i++) {
            totalCosts[i - currentYear] += cost.amount * 12;
          }
          break;
        case 'YEARLY':
          for (let i = startYear; i < currentYear + 5; i++) {
            totalCosts[i - currentYear] += cost.amount;
          }
          break;
        default:
          break;
      }
    });

    return totalCosts;
  };

  const settings = {
    series: [{
      name: t("section.cost.chart.seriesName"),
      data: calculateTotalCosts(),
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      colors: ['#feb019'],
      // colors: ['#F02525'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: Array.from({ length: 5 }, (_, i) => currentYear + i),
      },
      yaxis: {
        title: {
          text: t("section.cost.chart.title"),
          style: {
            fontSize: '15px'
          }
        },
        labels: {
          formatter: function (value) {
            return formatNumber(value, t('currency'));
          }
        }
      }
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={settings.options} series={settings.series} type="bar" height={350} />
    </div>
  );
};