export const columnsDashboardTab = [
  { id: 'date', name: 'Date', align: 'left'},
  { id: 'type', name: 'Type', align: 'center' },
  { id: 'category', name: 'Category', align: 'left' },
  { id: 'comment', name: 'Comment', align: 'left' },
  {
    id: 'sum',
    name: 'Sum',
  
    align: 'left',
    format: value => value.toFixed(2),
  },
  { id: 'actions', name: '', align: 'center' },
];
