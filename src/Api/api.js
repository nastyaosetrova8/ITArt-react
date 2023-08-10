import axios from 'axios';

const baseUrl = 'https://wallet.goit.ua';
const baseUrlMonobank = 'https://api.monobank.ua';

const instance_currency = axios.create({
  baseURL: baseUrlMonobank,
});

export const instance = axios.create({
  baseURL: baseUrl,
});

export const requestCurrency = async () => {
  const { data } = await instance_currency.get('/bank/currency');
  return data;
};
