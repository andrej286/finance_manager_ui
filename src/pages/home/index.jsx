import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import {Link} from "react-router-dom";
import {fetchIncomes} from "../../services/httpUtils";
import {getMonthlyTotal} from "./util";

export const Home = () => {
  const [incomes, setIncomes] = useState([]);

  const fetchAndSetIncome = async () => {
    const data = await fetchIncomes();
    setIncomes(data);
  };

  useEffect(() => {
    fetchAndSetIncome();
  }, []);

  const settings = {
    series: [{
      name: "Savings",
      data: getMonthlyTotal(incomes)
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      }
    },
  };

  return (
    <>
      <h1>Home</h1>
      <Link to="/goals">See goals screen</Link>
      <br/>
      <Link to="/costs">See costs screen</Link>
      <div id="chart">
        <ReactApexChart options={settings.options} series={settings.series} type="line" height={350} />
      </div>
    </>
  );
};
