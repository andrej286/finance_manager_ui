import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import {fetchAssets} from "../../../api/http-utils/assets";
import {InputGroup, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ASSETS_PAGE} from "../../../routes";
import {useTranslation} from "react-i18next";
import {formatNumber} from "../../../common/util";

const Capital = () => {
  const [assets, setAssets] = useState([]);
  const [numberOfYears, setNumberOfYears] = useState(11);
  const {t} = useTranslation();

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
    name: t("calculator.capital.chart.seriesName"),
    data: assetValues
  }];

  const options = {
    chart: {
      type: 'bar',
      height: '100%'
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: years.map(year => `${year}`)
    },
    yaxis: {
      title: {
        text: t("calculator.capital.chart.value")
      },
      labels: {
        formatter: function (value) {
          return formatNumber(value, t('currency'));
        }
      }
    },
    title: {
      text: t("calculator.capital.title"),
      align: 'center',
      style: {
        fontSize: '20px'
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
      <ReactApexChart options={options} series={chartData} type="bar" height={350} />
      <InputGroup className="mb-3 w-25" >
        <InputGroup.Text id="inputGroup-sizing-default">
          {t("calculator.capital.selectYears")}
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
        <Button variant="primary">{t("calculator.capital.addAsset")}</Button>
      </Link>
    </>
  );
};

export default Capital;
