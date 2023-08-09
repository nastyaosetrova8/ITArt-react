import { useCategoriesType } from 'hooks/selectedCategories';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectExpenseSummary,
  selectIncomeSummary,
  selectSummary,
} from 'redux/selectors';
import {
  StyledIcon,
  StyledP,
  StyledSpanExpenses,
  StyledSpanIncome,
  StyledSum,
  StyledTbody,
  StyledText,
  StyledThead,
  StyledTotalWrapper,
  StyledTr,
  WrapperTable,
} from './StyledTable';

export const colors = [
  'rgb(0, 173, 132)',
  'rgb(36, 204, 167)',
  'rgb(110, 120, 232)',
  'rgb(129, 225, 255)',
  'rgb(197, 186, 255)',
  'rgb(253, 148, 152)',
  'rgb(254, 208, 87)',
  'rgb(255, 216, 208)',
  'rgb(0, 191, 255)',
  'rgb(243, 71, 35)',
  'rgb(183, 132, 167)',
];

export const Table = () => {
  const summary = useSelector(selectSummary);
  const [expenseCategories] = useCategoriesType(summary);
  const incomeSummary = useSelector(selectIncomeSummary);
  const expenseSummary = useSelector(selectExpenseSummary);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <WrapperTable>
        <StyledThead>
          <StyledTr>
            <th>Category</th>
            <th>Sum</th>
          </StyledTr>
        </StyledThead>
        <StyledTbody>
          {expenseCategories.map((el, idx) => (
            <tr key={el.name}>
              <StyledIcon
                style={{
                  backgroundColor: colors[idx % colors.length],
                }}
              ></StyledIcon>
              <StyledText>{el.name}</StyledText>
              <StyledSum>{Number(el.total).toFixed(2) * 1}</StyledSum>
            </tr>
          ))}
        </StyledTbody>
      </WrapperTable>
      <StyledTotalWrapper>
        <StyledP>
          Expenses:
          <StyledSpanExpenses>
            {Number(expenseSummary).toFixed(2) * 1}
          </StyledSpanExpenses>
        </StyledP>
        <StyledP>
          Income:
          <StyledSpanIncome>
            {Number(incomeSummary).toFixed(2) * 1}
          </StyledSpanIncome>
        </StyledP>
      </StyledTotalWrapper>
    </div>
  );
};
