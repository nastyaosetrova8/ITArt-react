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

// =====================================================

export const makerDasboardTab = ({
  transactionDate,
  type,
  categoryId,
  comment,
  amount,
  id,
}) => {
  const dataTable = {
    columns: columnsDashboardTab,
    rows: [
      {
        date: transactionDate,
        type: type === 'INCOME' ? '+' : '-',
        category: categoryId,
        comment,
        sum: amount,
        id,
      },
    ],
  };

  return dataTable;
};
