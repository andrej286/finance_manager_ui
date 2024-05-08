import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import {fetchAssets} from "../../../api/http-utils/assets";
import {FinanceNavbar} from "../../../components/finance-navbar";
import {InputGroup, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ASSETS_PAGE} from "../../../routes";

const Capital = () => {
  const [assets, setAssets] = useState([]);
  const [numberOfYears, setNumberOfYears] = useState(11);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: numberOfYears }, (_, i) => currentYear + i);
  const assetValues = years.map(year =>
    assets.reduce((total, asset) => {
      const assetYear = new Date(asset.dateOfAcquirement).getFullYear();
      const yearsSinceAcquirement = year - assetYear;
      const interestRateMultiplier = Math.pow(1 + asset.interestRate / 100, yearsSinceAcquirement);
      return assetYear <= year ? total + (asset.value * interestRateMultiplier) : total;
    }, 0)
  ).map(value => Math.round(value));

  const chartData = [{
    name: 'Assets',
    data: assetValues
  }];

  const options = {
    chart: {
      type: 'bar',
      height: '100%'
    },
    xaxis: {
      categories: years.map(year => `${year}`)
    },
    yaxis: {
      title: {
        text: 'Value'
      }
    }
  };

  const handleYearChange = ({target}) => {
    const { value } = target;
    setNumberOfYears(value)
  };

  const fetchAndSetAssets = async () => {
    const data = await fetchAssets();
    setAssets(data);
  };

  useEffect(() => {
    fetchAndSetAssets();
  }, []);

  return (
    <>
      <FinanceNavbar />
      <h4>Capital calculator</h4>
      <ReactApexChart options={options} series={chartData} type="bar" height={350} />
      <InputGroup className="mb-3 w-25" >
        <InputGroup.Text id="inputGroup-sizing-default">
          Select number of years
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={numberOfYears}
          onChange={handleYearChange}
          type="number"
        />
      </InputGroup>
      <Link to={ASSETS_PAGE.path}>
        <Button variant="primary">Add more Assets here >></Button>
      </Link>
    </>
  );
};

export default Capital;
