//import { datas } from 'components/Chart/Chart';
import { DiagramSelect } from 'components/DiagramSelect/DiagramSelect';
import { useCategoriesType } from 'hooks/selectedCategories';
import { useSelector } from 'react-redux';
import {
  selectExpenseSummary,
  selectIncomeSummary,
  selectSummary,
} from 'redux/selectors';

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
  //const summary = datas; //examle
  const [expenseCategories] = useCategoriesType(summary); //example
  const incomeSummary = useSelector(selectIncomeSummary);
  const expenseSummary = useSelector(selectExpenseSummary);

  return (
    <div>
      Table statistic
      <DiagramSelect></DiagramSelect>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {expenseCategories.map((el, idx) => (
            <tr key={el.name}>
              <td
                style={{
                  backgroundColor: colors[idx % colors.length],
                }}
              ></td>
              <td>{el.name}</td>
              <td>{Number(el.total).toFixed(2) * 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>
          Expenses:
          <span>{Number(expenseSummary).toFixed(2) * 1}</span>
        </p>
        <p>
          Income:
          <span>{Number(incomeSummary).toFixed(2) * 1}</span>
        </p>
      </div>
    </div>
  );
};
