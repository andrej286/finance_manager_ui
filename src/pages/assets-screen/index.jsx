import React, {useEffect, useState} from 'react';
import {fetchAssets} from "../../api/http-utils/assets";
import {AssetsTable} from "./assets-table";
import AddAssetForm from "./add-asset-form";
import AssetsChart from "./assets-chart";
import {useTranslation} from "react-i18next";

export const AssetsScreen = () => {
  const [assets, setAssets] = useState([]);
  const {t} = useTranslation();

  const fetchAndSetAssets = async () => {
    const data = await fetchAssets();
    setAssets(data);
  };

  useEffect(() => {
    fetchAndSetAssets();
  }, []);

  return (
    <>
      <h1>{t("section.asset.title")}</h1>
      <AssetsChart assets={assets}/>
      <AddAssetForm onSuccess={fetchAndSetAssets}/>
      <AssetsTable assets={assets} onSuccess={fetchAndSetAssets}/>
    </>
  );
};
