import React, {useEffect, useState} from 'react';
import {getMonthlyTotal} from "./util";
import {fetchIncomes} from "../../../api/http-utils/incomes";
import {FinanceNavbar} from "../../../components/finance-navbar";
import ReactApexChart from "react-apexcharts";

export const Earnings = () => {
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
        text: 'Income and capital',
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

  const fetchAndSetIncome = async () => {
    const data = await fetchIncomes();
    setIncomes(data);
  };

  useEffect(() => {
    fetchAndSetIncome()
  }, []);

  // TODO: 5/5/2024 : Create an input field to indicate the starting capital(first value) that the chart should have,
  //  add a link button to the incomes section and say go here to add more incomes, add a list(<ListGroup> from react bootstrap)
  //  which will display the incomes that were taken into account while creating this chart, also add calculation for the interest rate
  return (
    <>
      <FinanceNavbar/>
      <div id="chart">
        <ReactApexChart options={settings.options} series={settings.series} type="line" height={350} />
      </div>
      Calculates the earnings taken from the incomes for the given year or next 12 month subtracting the costs
      <div> will have a input fields to enter the initial capital </div>
      <div> could possibly have a small list of all the incomes and costs taken into account </div>
    </>
  );
};
