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

// export const makerDasboardTab = ({ transactions, categories }) => {
//   // const newArr = arr2.map(item => {
//   //   const matchedItem = arr1.find(e => e.id === item.idx);
//   //   if (matchedItem) {
//   //     return {
//   //       ...item,
//   //       cat: matchedItem.name,
//   //     };
//   //   } else {
//   //     return item;
//   //   }
//   // });

//   const dataTable = {
//     columns: columnsDashboardTab,
//     rows: transactions.map(
//       ({ transactionDate, type, categoryId, comment, amount, id }) => {
//         return {
//           date: transactionDate,
//           type: type === 'INCOME' ? '+' : '-',
//           category: categoryId,
//           comment,
//           sum: amount,
//           id,
//         };
//       }
//     ),
//   };

//   return dataTable;
// };

export const makerDasboardTab = ({ transactions, categories }) => {
  if (!transactions) return;
  else {
    const dataTable = {
      columns: columnsDashboardTab,
      rows: transactions?.map(item => {
        const matchedNameCategory = categories.find(
          e => e.id === item.categoryId
        );
        return matchedNameCategory
          ? {
              ...item,
              category: matchedNameCategory.name,
              date: item.transactionDate,
              type: item.type === 'INCOME' ? '+' : '-',
              sum: item.amount,
            }
          : {
              ...item,
              category: item.categoryId,
              date: item.transactionDate,
              type: item.type === 'INCOME' ? '+' : '-',
              sum: item.amount,
            };
        // if (matchedNameCategory) {
        //   return {
        //     ...item,
        //     category: matchedNameCategory.name,
        //     date: item.transactionDate,
        //     type: item.type === 'INCOME' ? '+' : '-',
        //     sum: item.amount,
        //   };
        // } else {
        //   return {
        //     ...item,
        //     category: item.categoryId,
        //     date: item.transactionDate,
        //     type: item.type === 'INCOME' ? '+' : '-',
        //     sum: item.amount,
        //   };
        // }
      }),
    };

    return dataTable;
  }
};
