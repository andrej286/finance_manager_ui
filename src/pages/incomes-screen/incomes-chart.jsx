import React from 'react';
import ReactApexChart from 'react-apexcharts';

const IncomesChart = ({incomes}) => {

  const settings  = {
    series: [{
      name: 'Income',
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
          text: 'Value'
        },
        labels: {
          formatter: function (value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'EUR'});
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
