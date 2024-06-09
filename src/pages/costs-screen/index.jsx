import React, {useEffect, useState}  from 'react';
import {CostsTable} from "./costs-table";
import AddCostForm from "./add-cost-form";
import {CostsChart} from "./costs-chart";
import {fetchCosts} from "../../api/http-utils/costs";
import {useTranslation} from "react-i18next";

export const CostsScreen = () => {
  const [costs, setCosts] = useState([]);
  const {t} = useTranslation();

  const fetchAndSetCosts = async () => {
    const data = await fetchCosts();
    setCosts(data);
  };

  useEffect(() => {
    fetchAndSetCosts();
  }, []);

  return (
    <>
      <h1>{t("section.cost.title")}</h1>
      <CostsChart costs={costs} />
      <AddCostForm onSuccess={fetchAndSetCosts}/>
      <CostsTable costs={costs} onSuccess={fetchAndSetCosts}/>
    </>
  );
};
