import React, {useEffect, useState} from 'react';
import {fetchIncomes} from "../../../api/http-utils/incomes";
import ReactApexChart from "react-apexcharts";
import {Button, Form, InputGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {INCOMES_PAGE} from "../../../routes";
import {calculateMonthlyValues, getNext12Months} from "./util";
import {useTranslation} from "react-i18next";

export const Earnings = () => {
  const [incomes, setIncomes] = useState([]);
  const [startCapital, setStartCapital] = useState(0);
  const {t} = useTranslation();

  const settings = {
    series: [{
      name: t("calculator.earnings.chart.seriesName"),
      data: calculateMonthlyValues(incomes, startCapital)
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
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: getNext12Months(),
      },
      yaxis: {
        title: {
          text: t("calculator.earnings.chart.value")
        },
        min: 0,
        labels: {
          formatter: function (value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
          }
        }
      },
      title: {
        text: t("calculator.earnings.title"),
        align: 'center',
        style: {
          fontSize: '20px'
        }
      }
    },
  };

  const handleStartCapitalChange = ({target}) => {
    const { value } = target;
    setStartCapital(parseInt(value))
  };

  const fetchAndSetIncome = async () => {
    const data = await fetchIncomes();
    setIncomes(data);
  };

  useEffect(() => {
    fetchAndSetIncome()
  }, []);

  return (
    <>
      <div id="chart">
        <ReactApexChart options={settings.options} series={settings.series} type="line" height={350} />
      </div>
      <InputGroup className="mb-3 w-25" >
        <InputGroup.Text id="inputGroup-sizing-default">
          {t("calculator.earnings.startCapital")}
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={startCapital}
          onChange={handleStartCapitalChange}
          width={100}
        />
      </InputGroup>
      <Link to={INCOMES_PAGE.path}>
        <Button variant="primary">{t("calculator.earnings.addIncome")}</Button>
      </Link>
    </>
  );
};
