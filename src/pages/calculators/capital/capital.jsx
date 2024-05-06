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
    assets.reduce((total, asset) => (new Date(asset.dateOfAcquirement).getFullYear() <= year ? total + asset.value : total), 0)
  );

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

  // TODO: 6/5/2024 : Need to make calculations for the interest rate(weather positive or negative)
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
        />
      </InputGroup>
      <Link to={ASSETS_PAGE.path}>
        <Button variant="primary">Add more Assets here >></Button>
      </Link>
    </>
  );
};

export default Capital;
