import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import {fetchAssets} from "../../../api/http-utils/assets";
import {FinanceNavbar} from "../../../components/finance-navbar";

const Capital = () => {

  const [assets, setAssets] = useState([]);

  const fetchAndSetAssets = async () => {
    const data = await fetchAssets();
    setAssets(data);
  };

  useEffect(() => {
    fetchAndSetAssets();
  }, []);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear + i);
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

  // TODO: 5/5/2024 : add an input field to let the user chose how many years to look into the future for the graph, \
  //  add text as a description to the calculator, add a link button to the assets section and say add more assets here,
  //  afterwords add calculations for the interest rate(weather positive or negative)

  return (
    <>
      <FinanceNavbar />
      <ReactApexChart options={options} series={chartData} type="bar" height={350} />
    </>
  );
};

export default Capital;
