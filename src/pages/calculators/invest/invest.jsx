import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import {Form, InputGroup} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {formatNumber} from "../../../common/util";

const Invest = () => {
  const [initialAmount, setInitialAmount] = useState(1000);
  const [yearsToLookInto, setYearsToLookInto] = useState(10);
  const [optimisticRate, setOptimisticRate] = useState('5');
  const [realisticRate, setRealisticRate] = useState('4');
  const [pessimisticRate, setPessimisticRate] = useState('3');
  const {t} = useTranslation();

  const calculateData = () => {
    const currentYear = new Date().getFullYear();
    const data = {
      optimistic: [],
      realistic: [],
      pessimistic: [],
      years: Array.from({ length: yearsToLookInto }, (_, i) => (currentYear + i).toString())
    };

    data.years.forEach(year => {
      data.optimistic.push(Math.round(initialAmount * (1 + parseFloat(optimisticRate) / 100) ** (year - 2023)));
      data.realistic.push(Math.round(initialAmount * (1 + parseFloat(realisticRate) / 100) ** (year - 2023)));
      data.pessimistic.push(Math.round(initialAmount * (1 + parseFloat(pessimisticRate) / 100) ** (year - 2023)));
    });

    return data;
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
      categories: calculateData().years,
    },
    yaxis: {
      title: {
        text: t("calculator.invest.chart.value")
      },
      labels: {
        formatter: function (value) {
          return formatNumber(value, t('currency'));
        }
      }
    },
    title: {
      text: t("calculator.invest.title"),
      align: 'center',
      style: {
        fontSize: '20px'
      }
    }
  };

  const series = [
    {
      name: t("calculator.invest.chart.optimisticSeries"),
      data: calculateData().optimistic
    },
    {
      name: t("calculator.invest.chart.realisticSeries"),
      data: calculateData().realistic
    },
    {
      name: t("calculator.invest.chart.pessimisticSeries"),
      data: calculateData().pessimistic
    }
  ];

  return (
    <>
      <ReactApexChart options={options} series={series} type="line" height={350} />
      <InputGroup className="mb-3 w-25" >
        <InputGroup.Text>{t("calculator.invest.initialAmount")}</InputGroup.Text>
        <Form.Control
          type="number"
          value={initialAmount}
          onChange={(e) => setInitialAmount(parseInt(e.target.value))}
        />
      </InputGroup>
      <InputGroup className="mb-3 w-25" >
        <InputGroup.Text>{t("calculator.invest.years")}</InputGroup.Text>
        <Form.Control
          type="number"
          value={yearsToLookInto}
          onChange={(e) => setYearsToLookInto(parseInt(e.target.value))}
        />
      </InputGroup>
      <InputGroup className="mb-3 w-25">
        <InputGroup.Text>{t("calculator.invest.optimisticRate")}</InputGroup.Text>
        <Form.Control
          type="text"
          value={optimisticRate}
          onChange={(e) => setOptimisticRate(e.target.value)}
          pattern="[0-9]*[.]?[0-9]*"
        />
      </InputGroup>
      <InputGroup className="mb-3 w-25">
        <InputGroup.Text>{t("calculator.invest.realisticRate")}</InputGroup.Text>
        <Form.Control
          type="text"
          value={realisticRate}
          onChange={(e) => setRealisticRate(e.target.value)}
          pattern="[0-9]*[.]?[0-9]*"
        />
      </InputGroup>
      <InputGroup className="mb-3 w-25">
        <InputGroup.Text>{t("calculator.invest.pessimisticRate")}</InputGroup.Text>
        <Form.Control
          type="text"
          value={pessimisticRate}
          onChange={(e) => setPessimisticRate(e.target.value)}
          pattern="[0-9]*[.]?[0-9]*"
        />
      </InputGroup>
    </>
  );
};

export default Invest;
