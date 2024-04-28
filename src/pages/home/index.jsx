import React, {useEffect, useState} from 'react';
import { Link, useLocation} from "react-router-dom";
import {fetchAccessToken} from "../../api/http-utils/auth";
import {fetchIncomes} from "../../api/http-utils/incomes";
import ReactApexChart from 'react-apexcharts';
import {getMonthlyTotal} from "./util";

export const Home = () => {
  const location = useLocation();
  const [incomes, setIncomes] = useState([]);

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

  const fetchAndSetIncome = async (token) => {
    const data = await fetchIncomes(token);
    console.log('this is the data from the fetchAndSetIncome : ', data)
    setIncomes(data);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    console.log('this is the code from the home component : ', code)

    if (code) {
      fetchAccessToken(code)
        .then((response) => {
          const token = response.token;
          console.log('this is the response from the fetchAccessToken : ', response)
          fetchAndSetIncome(token)
        });
    }
  }, [location.search]);

  return (
    <>
      <h1>Home</h1>
      <Link to="/goals">See goals screen</Link>
      <br/>
      <Link to="/costs">See costs screen</Link>
      <br/>
      <Link to="/incomes">See incomes screen</Link>
      <br/>
      <Link to="/assets">See assets screen</Link>
      <div id="chart">
        <ReactApexChart options={settings.options} series={settings.series} type="line" height={350} />
      </div>
    </>
  );
};
