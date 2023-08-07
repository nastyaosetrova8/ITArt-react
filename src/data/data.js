export const columnsDashboardTab = [
  { id: 'date', name: 'Date', maxWidth: 120, align: 'left', fontWeight: '600'},
  { id: 'type', name: 'Type', maxWidth: 100, align: 'center' },
  { id: 'category', name: 'Category', maxWidth: 170, align: 'left' },
  { id: 'comment', name: 'Comment', maxWidth: 170, align: 'left' },
  {
    id: 'sum',
    name: 'Sum',
    maxWidth: 170,
    align: 'left',
    format: value => value.toFixed(2),
  },
  { id: 'actions', name: '', maxWidth: 170, align: 'center' },
];
