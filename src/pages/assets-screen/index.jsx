import React, {useEffect, useState} from 'react';
import {fetchAssets} from "../../api/http-utils/assets";
import {AssetsTable} from "./assets-table";
import AddAssetForm from "./add-asset-form";
import AssetsChart from "./assets-chart";

export const AssetsScreen = () => {
  const [assets, setAssets] = useState([]);

  const fetchAndSetAssets = async () => {
    const data = await fetchAssets();
    setAssets(data);
  };

  useEffect(() => {
    fetchAndSetAssets();
  }, []);

  return (
    <>
      <h1>Assets</h1>
      <AssetsChart assets={assets}/>
      <AddAssetForm onSuccess={fetchAndSetAssets}/>
      <AssetsTable assets={assets} onSuccess={fetchAndSetAssets}/>
    </>
  );
};
