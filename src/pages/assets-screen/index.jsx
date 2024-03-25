import React, {useEffect, useState} from 'react';
import {fetchAssets} from "../../api/http-utils/assets";
import {AssetsTable} from "./assets-table";
import AddAssetForm from "./add-asset-form";

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
      {/*<CostsChart costs={costs} />*/}
      <AssetsTable assets={assets} onDelete={fetchAndSetAssets}/>
      <AddAssetForm onSuccess={fetchAndSetAssets}/>
    </>
  );
};
