export const calculateMonthlyValues = (incomes, startCapital) => {
  const monthlyTotal = Array(12).fill(0);
  const now = new Date();
  const currentMonth = now.getMonth();

  incomes.forEach((income) => {
    const incomeMonthlyTotal = Array(12).fill(0);
    for (let month = 0; month < 12; month++) {
      const previusMonth = month > 0 ? incomeMonthlyTotal[month - 1] : 0;

      if (isIncomeWithinRange(income.startDate, income.terminationDate, now, month + 1)) {
        if (month < 12 - currentMonth) {
          incomeMonthlyTotal[month] += income.annualMonthlyValue + previusMonth;
        } else {
          incomeMonthlyTotal[month] += income.annualMonthlyValue * (1 + income.interestRate / 100) + previusMonth;
        }
      } else {
        incomeMonthlyTotal[month] += previusMonth;
      }
    }

    for (let month = 0; month < 12; month++) {
      monthlyTotal[month] += incomeMonthlyTotal[month];
    }
  });

  for (let month = 0; month < 12; month++) {
    monthlyTotal[month] += startCapital;
  }

  return monthlyTotal;
};

const isIncomeWithinRange = (startDate, terminationDate, dateNow, mountIteration) => {
  const start = new Date(startDate);
  const startMonth = start.getMonth() + 1;
  const startYear = start.getFullYear();

  const end = new Date(terminationDate);
  const endMonth = end.getMonth() + 1;
  const endYear = end.getFullYear();

  const current = new Date(dateNow);
  let currentYear = current.getFullYear();
  let currentMonth = current.getMonth() + mountIteration;

  if (currentMonth > 12) {
    currentMonth = Math.abs(12 - currentMonth);
    currentYear += 1
  }

  if ((startYear > currentYear || (startYear === currentYear && startMonth > currentMonth)) ||
    (endYear < currentYear || (endYear === currentYear && endMonth < currentMonth))) {
    return false
  }

  return true;
};

export const getNext12Months = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const months = [];
  for (let i = 0; i < 12; i++) {
    const month = (currentMonth + i) % 12;
    const year = currentYear + Math.floor((currentMonth + i) / 12);
    months.push(`${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`);
  }

  return months;
};