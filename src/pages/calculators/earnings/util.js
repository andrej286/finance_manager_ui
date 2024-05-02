
export const getMonthlyTotal = (incomes) => {

  // TODO: 3/16/2024 : Increase by the income of the previus years from the
  //  starting point of the user, after that subtract the costs and the goals,
  //  add option for adding an option to enable the assets in the calculation
  //  as the initial capital. Consider moving the calculation to the backend

  const monthlyTotal = Array(12).fill(0);

  incomes.forEach((income) => {
    const startDate = new Date(income.startDate);
    const startMonth = startDate.getMonth();
    const startYear = startDate.getFullYear();
    const now = new Date();
    const currentYear = now.getFullYear();

    if (startYear === currentYear) {

      for (let month = startMonth; month < 12; month++) {

        const previusMonth = month > 0 ? monthlyTotal[month - 1] : 0;

        monthlyTotal[month] += income.annualMonthlyValue + previusMonth;
      }
    }
  });

  return monthlyTotal;
}