import React, {useEffect, useState} from 'react';
import {fetchIncomes} from '../../services/httpUtils';
import {IncomesTable} from "./incomes-table";
import AddIncomeForm from "./add-income-form";
import IncomesChart from "./incomes-chart";

export const IncomesScreen = () => {
  const [incomes, setIncomes] = useState([]);

  const fetchAndSetIncomes = async () => {
    const data = await fetchIncomes();
    setIncomes(data);
  };

  useEffect(() => {
    fetchAndSetIncomes();
  }, []);

  return (
    <>
      <h1>Incomes</h1>
      <IncomesChart incomes={incomes} />
      <IncomesTable incomes={incomes} onDelete={fetchAndSetIncomes}/>
      <AddIncomeForm onSuccess={fetchAndSetIncomes}/>
    </>
  );
};
