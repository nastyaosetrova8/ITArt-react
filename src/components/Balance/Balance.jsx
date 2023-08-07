import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/selectors';
import { StyledBalance } from './StyledBalance';

function Balance() {
  const balance = useSelector(selectBalance);

  useEffect(() => {}, [balance]);

  return (
    <StyledBalance>
      <h2 className="title-balance">Your balance</h2>
      <p className="balance">₴ {balance.toFixed(2)}</p>
    </StyledBalance>
  );
}

export default Balance;
