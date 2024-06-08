import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import {Form, InputGroup} from "react-bootstrap";

const Invest = () => {
  const [initialAmount, setInitialAmount] = useState(1000);
  const [yearsToLookInto, setYearsToLookInto] = useState(10);
  const [optimisticRate, setOptimisticRate] = useState('5');
  const [realisticRate, setRealisticRate] = useState('4');
  const [pessimisticRate, setPessimisticRate] = useState('3');

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
        text: 'Value (€)'
      },
      labels: {
        formatter: function (value) {
          return value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
        }
      }
    },
    title: {
      text: 'Invest Calculator',
      align: 'center',
      style: {
        fontSize: '20px'
      }
    }
  };

  const series = [
    {
      name: 'Optimistic',
      data: calculateData().optimistic
    },
    {
      name: 'Realistic',
      data: calculateData().realistic
    },
    {
      name: 'Pessimistic',
      data: calculateData().pessimistic
    }
  ];

  return (
    <>
      <ReactApexChart options={options} series={series} type="line" height={350} />
      <InputGroup className="mb-3 w-25" >
        <InputGroup.Text>Initial Amount (€):</InputGroup.Text>
        <Form.Control
          type="number"
          value={initialAmount}
          onChange={(e) => setInitialAmount(parseInt(e.target.value))}
        />
      </InputGroup>
      <InputGroup className="mb-3 w-25" >
        <InputGroup.Text>Years to look into:</InputGroup.Text>
        <Form.Control
          type="number"
          value={yearsToLookInto}
          onChange={(e) => setYearsToLookInto(parseInt(e.target.value))}
        />
      </InputGroup>
      <InputGroup className="mb-3 w-25">
        <InputGroup.Text>Optimistic Rate (%):</InputGroup.Text>
        <Form.Control
          type="text"
          value={optimisticRate}
          onChange={(e) => setOptimisticRate(e.target.value)}
          pattern="[0-9]*[.]?[0-9]*"
        />
      </InputGroup>
      <InputGroup className="mb-3 w-25">
        <InputGroup.Text>Realistic Rate (%):</InputGroup.Text>
        <Form.Control
          type="text"
          value={realisticRate}
          onChange={(e) => setRealisticRate(e.target.value)}
          pattern="[0-9]*[.]?[0-9]*"
        />
      </InputGroup>
      <InputGroup className="mb-3 w-25">
        <InputGroup.Text>Pessimistic Rate (%):</InputGroup.Text>
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
