import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FinanceNavbar } from "../../../components/finance-navbar";

const Invest = () => {
  const data = {
    optimistic: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    pessimistic: [20, 30, 25, 40, 39, 50, 60, 71, 105],
    realistic: [25, 35, 30, 45, 44, 55, 65, 86, 120],
    years: [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031]
  };

  const options = {
    chart: {
      height: '100%',
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      categories: data.years,
    },
    yaxis: {
      title: {
        text: 'Value'
      }
    },
    title: {
      text: 'Investing Strategies',
      align: 'center',
      style: {
        fontSize: '20px'
      }
    }
  };

  const series = [
    {
      name: 'Optimistic',
      data: data.optimistic
    },
    {
      name: 'Pessimistic',
      data: data.pessimistic
    },
    {
      name: 'Realistic',
      data: data.realistic
    }
  ];

  // TODO: 5/5/2024 Create 3 options for investing(all three of them have 3 values for optimistic, pessimistic and realistic),
  //  and create a forth option for custom where the user can set his own pessimistic, realistic and optimistic values to display on the chart.

  return (
    <>
      <FinanceNavbar />
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </>
  );
};

export default Invest;
