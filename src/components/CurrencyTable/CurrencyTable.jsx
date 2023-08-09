import {
  TableHead,
  Paper,
  TableCell,
  Table,
  TableBody,
  TableRow,
} from '@mui/material';
import PropTypes from 'prop-types';
import { StyledTableContainer } from './StyledTable';

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
    <StyledTableContainer
      component={Paper}
      sx={{ background: 'transparent', boxShadow: 'none' }}
    >
      <Table sx={{ width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell className="th-currency" align="center">
              Currency
            </TableCell>
            <TableCell className="th-purshase" align="center">
              Purchase
            </TableCell>
            <TableCell className="td-sell" align="left">
              Sale
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map(row => (
            <TableRow key={row.currency}>
              <TableCell align="center">{row.currency}</TableCell>
              <TableCell align="center" className="td-purshase">
                {row.purchase}
              </TableCell>
              <TableCell align="left" className="td-sell">
                {row.sale}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
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
