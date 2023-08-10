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
  '#0D1282',
  '#D71313',
  '#F86F03',
  '#F0DE36',
  '#1A5D1A',
  '#525FE1',
  '#FF55BB',
  '#5C469C',
  '#C07F00',
  '#009FBD',
  '#77037B',
  '#00FFCA',
  '#E21818',
  '#16FF00',
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
