import React, {useEffect, useState} from 'react';
import {IncomesTable} from "./incomes-table";
import AddIncomeForm from "./add-income-form";
import IncomesChart from "./incomes-chart";
import {fetchIncomes} from "../../api/http-utils/incomes";
import {useTranslation} from "react-i18next";

export const IncomesScreen = () => {
  const [incomes, setIncomes] = useState([]);
  const {t} = useTranslation();

  const fetchAndSetIncomes = async () => {
    const data = await fetchIncomes();
    setIncomes(data);
  };

  useEffect(() => {
    fetchAndSetIncomes();
  }, []);

  return (
    <>
      <h1>{t("section.income.title")}</h1>
      <IncomesChart incomes={incomes} />
      <AddIncomeForm onSuccess={fetchAndSetIncomes}/>
      <IncomesTable incomes={incomes} onSuccess={fetchAndSetIncomes}/>
    </>
  );
};
