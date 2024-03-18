import React, {useEffect, useState}  from 'react';
import {fetchCosts} from "../../services/httpUtils";
import {CostsTable} from "./costs-table";
import AddCostForm from "./add-cost-form";
import {CostsChart} from "./costs-chart";

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
