import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { colors } from 'components/Table/Table';
import { useCategoriesType } from 'hooks/selectedCategories';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectBalance, selectSummary } from 'redux/selectors';
import { ChartWrapper, StyledSpan } from './StyledChart';
ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = () => {
  const balance = useSelector(selectBalance);
  const summary = useSelector(selectSummary);
  const [expenseCategories] = useCategoriesType(summary);

  const data = {
    labels: [],
    datasets: [
      {
        lable: '# of Votes',
        data: !expenseCategories.length
          ? [1]
          : expenseCategories.map(item => item.total),
        backgroundColor: colors,
        borderColor: colors,
        cutout: '75%',
        hoverOffset: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <ChartWrapper>
      <Doughnut data={data} options={options}></Doughnut>
      <StyledSpan>₴ {balance.toFixed(2)}</StyledSpan>
    </ChartWrapper>
  );
};
