import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import {Link} from "react-router-dom";
import {fetchIncomes} from "../../services/httpUtils";

export const Home = () => {
  const [incomes, setIncomes] = useState([]);

  const fetchAndSetIncome = async () => {
    const data = await fetchIncomes();
    setIncomes(data);
  };

  useEffect(() => {
    fetchAndSetIncome();
  }, []);

  console.log('here are the incomes: ', incomes)
  // TODO: 3/10/2024: create an array here
  console.log('here are the incomes edited: ', incomes)

  const settings = {
    series: [{
      name: "Savings",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },
  };

  return (
    <>
      <h1>Home</h1>
      <Link to="/goals">See goals screen</Link>
      <div id="chart">
        <ReactApexChart options={settings.options} series={settings.series} type="line" height={350} />
      </div>
    </>
  );
};
