import React from 'react';
import ReactApexChart from 'react-apexcharts';

const IncomesChart = ({incomes}) => {

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const filteredIncomes = incomes.filter(
    (income) =>
      new Date(income.startDate).getFullYear() <= currentYear &&
      (new Date(income.terminationDate).getFullYear() > currentYear ||
        (new Date(income.terminationDate).getFullYear() === currentYear &&
          new Date(income.terminationDate).getMonth() >= currentMonth)
           || !income.terminationDate)
  );

  const settings  = {
    series: [{
      name: 'Income',
      data: filteredIncomes.map(income => income.annualMonthlyValue)
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
        categories: filteredIncomes.map(income => income.name),
      },
      yaxis: {
        title: {
          text: 'Value'
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
