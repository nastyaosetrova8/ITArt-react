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

const makerFormatDate = date => {
  const partsDate = date.split('-');
  const formattedDate = `${partsDate[2]}.${
    partsDate[1]
  }.${partsDate[0].substring(2, 4)}`;
  return formattedDate;
};

export const makerDashboardTab = ({ transactions, categories }) => {
  if (!transactions) return;
  else {
    const dataTable = {
      columns: columnsDashboardTab,
      rows: transactions?.map(item => {
        const matchedNameCategory = categories.find(
          e => e.id === item.categoryId
        );
        return {
          ...item,
          category: matchedNameCategory
            ? matchedNameCategory.name
            : item.categoryId,
          date: makerFormatDate(item.transactionDate),
          type: item.type === 'INCOME' ? '+' : '-',
          sum: item.amount,
        };
      }),
    };

    return dataTable;
  }
};
