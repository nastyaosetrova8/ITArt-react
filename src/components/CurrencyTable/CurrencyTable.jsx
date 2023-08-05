import {
  TableContainer,
  TableHead,
  Paper,
  TableCell,
  Table,
  TableBody,
  TableRow,
} from '@mui/material';
import PropTypes from 'prop-types';

export const CurrencyTable = ({ dataCurrency }) => {
  const nameCurrencies = { USD: 840, EUR: 978 };

  const tableRows = dataCurrency.map(currency => ({
    currency: Object.keys(nameCurrencies).find(
      key => nameCurrencies[key] === currency.currencyCodeA
    ),
    purchase: currency.rateBuy.toFixed(2),
    sale: currency.rateSell.toFixed(2),
  }));

  return (
    <TableContainer component={Paper} sx={{ background: 'transparent' }}>
      <Table sx={{ width: '100%' }}>
        <TableHead sx={{ background: 'rgba(255, 255, 255, 0.2)' }}>
          <TableRow>
            <TableCell align="center">Currency</TableCell>
            <TableCell align="center">Purchase</TableCell>
            <TableCell align="center">Sale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map(row => (
            <TableRow key={row.currency}>
              <TableCell align="center">{row.currency}</TableCell>
              <TableCell align="center">{row.purchase}</TableCell>
              <TableCell align="center">{row.sale}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CurrencyTable.propTypes = {
  dataCurrency: PropTypes.arrayOf(
    PropTypes.shape({
      currencyCodeA: PropTypes.number.isRequired,
      currencyCodeB: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired,
      rateBuy: PropTypes.number.isRequired,
      rateCross: PropTypes.number.isRequired,
      rateSell: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
