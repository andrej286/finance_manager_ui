import React from 'react';
import ReactApexChart from 'react-apexcharts';

const IncomesChart = ({incomes}) => {

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const filteredIncomes = incomes.filter(
    (income) =>
      new Date(income.startDate).getFullYear() < currentYear &&
      new Date(income.terminationDate).getFullYear() > currentYear
  );

  incomes.forEach((income) => {
    const startDate = new Date(income.startDate);
    if (startDate.getFullYear() === currentYear && startDate.getMonth() < currentMonth) {
      const remainingMonths = 12 - currentMonth;
      const value = income.annualMonthlyValue * remainingMonths;
      filteredIncomes.push({
        ...income,
        annualMonthlyValue: value,
      });
    }
  });

  const series = [
    {
      name: 'Income',
      data: filteredIncomes.map((income) => ({
        x: income.startDate,
        y: income.annualMonthlyValue,
      })),
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeFormatter: {
          year: 'yyyy',
          month: 'MMM yyyy',
          day: 'dd MMM',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Value',
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default IncomesChart;