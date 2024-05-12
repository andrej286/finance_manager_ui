import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AssetsChart = ({ assets }) => {
  const settings = {
    series: [{
      name: 'Value (€) ',
      data: assets.map(asset => asset.value)
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: assets.map(asset => asset.name),
        labels: {
          formatter: function (value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
          }
        }
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
          }
        }
      },
    },
  }

  return (
    <div id="chart">
      <ReactApexChart options={settings.options} series={settings.series} type="bar" height={350} />
    </div>
  )
}

export default AssetsChart;
