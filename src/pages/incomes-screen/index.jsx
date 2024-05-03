import React, {useEffect, useState} from 'react';
import {IncomesTable} from "./incomes-table";
import AddIncomeForm from "./add-income-form";
import IncomesChart from "./incomes-chart";
import {fetchIncomes} from "../../api/http-utils/incomes";
import {FinanceNavbar} from "../../components/finance-navbar";

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
      <FinanceNavbar/>
      <h1>Incomes</h1>
      <IncomesChart incomes={incomes} />
      <IncomesTable incomes={incomes} onSuccess={fetchAndSetIncomes}/>
      <AddIncomeForm onSuccess={fetchAndSetIncomes}/>
    </>
  );
};
