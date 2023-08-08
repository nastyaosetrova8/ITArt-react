import { columnsDashboardTab } from 'data/data';

export const handleCurrency = data => {
  const currency = data.filter(item => {
    const isRateUahToUSD =
      item.currencyCodeA === 840 && item.currencyCodeB === 980;
    const isRateUahToEUR =
      item.currencyCodeA === 978 && item.currencyCodeB === 980;

    return (isRateUahToUSD || isRateUahToEUR) && item;
  });

  return currency;
};

// const makerFormatDate = date => {
//   const partsDate = date.split('-');
//   const formattedDate = `${partsDate[2]}.${
//     partsDate[1]
//   }.${partsDate[0].substring(2, 4)}`;
//   return formattedDate;
// };

function formatDate(date) {
  const dateObj = new Date(date);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = String(dateObj.getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
}

export const makerDashboardTab = ({ transactions, categories }) => {
  if (!transactions) return;
  else {
    const dataTable = {
      columns: columnsDashboardTab,
      rows: transactions?.map(item => {
        const matchedNameCategory = categories.find(
          e => e.id === item.categoryId
        );
        //  return {
        //   ...item,
        //   category: matchedNameCategory
        //     ? matchedNameCategory.name
        //     : item.categoryId,
        //   date: makerFormatDate(item.transactionDate),
        //   type: item.type === 'INCOME' ? '+' : '-',
        //   sum: item.amount,
        // };
        const isIncome = item.type === 'INCOME';

        const sumStyle = isIncome
          ? { color: '#FFB627', fontWeight: 600 }
          : { color: '#FF868D', fontWeight: 600 };

        const formattedAmount = isIncome
          ? item.amount
          : Math.abs(item.amount.toFixed(2));
        return {
          ...item,
          category: matchedNameCategory
            ? matchedNameCategory.name
            : item.categoryId,
          date: formatDate(item.transactionDate),
          type: item.type === 'INCOME' ? '+' : '-',
          sum: <span style={sumStyle}>{formattedAmount}</span>,
        };
      }),
    };

    return dataTable;
  }
};
