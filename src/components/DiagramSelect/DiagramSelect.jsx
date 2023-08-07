import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { getTransSumThunk } from 'redux/Thunks/TransactionsSumThunk';

export const DiagramSelect = () => {
  const dispatch = useDispatch();
  const date = new Date();

  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    dispatch(getTransSumThunk({ month: Number(month), year: Number(year) }));
    //console.log(month, year);
  }, [dispatch, month, year]);

  const handleSelectMonth = event => {
    //console.log(event.value);
    setMonth(event.value);
  };

  const handleSelectYear = event => {
    //console.log(event.value);
    setYear(event.value);
  };

  const optionsMonth = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];
  const optionsYear = [
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
    { value: '2017', label: '2017' },
    { value: '2016', label: '2016' },
    { value: '2015', label: '2015' },
    { value: '2014', label: '2014' },
    { value: '2013', label: '2013' },
    { value: '2012', label: '2012' },
    { value: '2011', label: '2011' },
    { value: '2010', label: '2010' },
  ];
  return (
    <div>
      <Select
        options={optionsMonth}
        onChange={handleSelectMonth}
        nameOfSelect={'month'}
      />

      <Select
        options={optionsYear}
        onChange={handleSelectYear}
        nameOfSelect={'year'}
      />
    </div>
  );
};
