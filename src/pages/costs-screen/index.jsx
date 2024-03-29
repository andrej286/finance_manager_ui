import React, {useEffect, useState}  from 'react';
import {CostsTable} from "./costs-table";
import AddCostForm from "./add-cost-form";
import {CostsChart} from "./costs-chart";
import {fetchCosts} from "../../api/http-utils/costs";

export const CostsScreen = () => {
  const [costs, setCosts] = useState([]);

  const fetchAndSetCosts = async () => {
    const data = await fetchCosts();
    setCosts(data);
  };

  useEffect(() => {
    fetchAndSetCosts();
  }, []);

  return (
    <>
      <h1>Costs</h1>
      <CostsChart costs={costs} />
      <CostsTable costs={costs} onDelete={fetchAndSetCosts}/>
      <AddCostForm onSuccess={fetchAndSetCosts}/>
    </>
  );
};
