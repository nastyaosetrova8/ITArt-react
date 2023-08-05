import { requestCurrency } from 'Api/api';
import { CurrencyTable } from 'components/CurrencyTable/CurrencyTable';
import Loader from 'components/Loader/Loader';
import { handleCurrency } from 'helpers/helpers';
import { useEffect, useState } from 'react';

function Currency() {
  const [dataCurrency, setDataCurrency] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const localDataCurrency = localStorage.getItem('currency');

    if (!localDataCurrency) {
      const fetchCurrency = async () => {
        try {
          setIsLoading(true);
          const data = await requestCurrency();
          const stringifiedCurrency = JSON.stringify(handleCurrency(data));
          localStorage.setItem('currency', stringifiedCurrency);
          setDataCurrency(handleCurrency(data));
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchCurrency();
    } else {
      const parsedCurrency = JSON.parse(localDataCurrency);
      return setDataCurrency(handleCurrency(parsedCurrency));
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <>{error.message}</>}
      {dataCurrency && !isLoading && (
        <CurrencyTable dataCurrency={dataCurrency} />
      )}
    </>
  );
}

export default Currency;
