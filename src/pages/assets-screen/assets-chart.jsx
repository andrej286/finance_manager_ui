import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {formatNumber} from "../../common/util";
import {useTranslation} from "react-i18next";

const AssetsChart = ({ assets }) => {
  const {t} = useTranslation();

  const settings = {
    series: [{
      name: t('section.asset.value'),
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
            return formatNumber(value, t('currency'));
          }
        }
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return formatNumber(value, t('currency'));
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
