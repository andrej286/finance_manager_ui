import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {formatNumber} from "../../common/util";
import {useTranslation} from "react-i18next";

const IncomesChart = ({incomes}) => {
  const {t} = useTranslation();

  const settings  = {
    series: [{
      name: t("section.income.title"),
      data: incomes.map(income => income.annualMonthlyValue)
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
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
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      colors: ['#00e396'],
      xaxis: {
        categories: incomes.map(income => income.name),
      },
      yaxis: {
        title: {
          text: t("section.income.value")
        },
        labels: {
          formatter: function (value) {
            return formatNumber(value, t('currency'));
          }
        }
      },
      fill: {
        opacity: 1
      },
    }
  };


  return (
    <div id="chart">
      <ReactApexChart options={settings.options} series={settings.series} type="bar" height={350} />
    </div>
  );
};

export default IncomesChart;
