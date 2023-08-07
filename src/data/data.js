export const columnsDashboardTab = [
  { id: 'date', name: 'Date', maxWidth: 120, align: 'center' },
  { id: 'type', name: 'Type', maxWidth: 100, align: 'center' },
  { id: 'category', name: 'Category', maxWidth: 170, align: 'center' },
  { id: 'comment', name: 'Comment', maxWidth: 170, align: 'center' },
  {
    id: 'sum',
    name: 'Sum',
    maxWidth: 170,
    align: 'center',
    format: value => value.toFixed(2),
  },
  { id: 'actions', name: 'Actions', maxWidth: 170, align: 'center' },
];
