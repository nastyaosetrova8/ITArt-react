import { useSelector } from "react-redux";
import { selectToken } from "redux/selectors";

export const ButtonAddTransactions = () => {
  const qqq = useSelector(selectToken)
  

  const handleClick = () => {
    console.log('axaxax');
    console.log(qqq);
  };
  return (
    <button type="button" onClick={handleClick}>
      Add transaction
    </button>
  );
};
