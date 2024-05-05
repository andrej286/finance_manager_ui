
export const getMonthlyTotal = (incomes) => {

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