import { notifyEmptySummary } from 'components/Toastify/Toastify';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getTransSumThunk } from 'redux/Thunks/TransactionsSumThunk';
import { selectSummary } from 'redux/selectors';
import { StyledSelectWrapper, selectStyles } from './StyledDiagramSelect';

export const DiagramSelect = () => {
  const summary = useSelector(selectSummary);
  const dispatch = useDispatch();
  const date = new Date();
  let options = { month: 'long' };

  // const [date, setDate] = useState({
  //   month: dates.getMonth() + 1,
  //   year: dates.getFullYear(),
  // });

  // useEffect(() => {
  //   if (Object.keys(date).length !== 2) return;
  //   console.log(date);
  //   dispatch(getTransSumThunk(date));
  //   setDate({});
  // }, [date, dispatch]);

  // const onChangeMonth = value => {
  //   console.log(value);
  //   setDate(prevState => {
  //     return prevState === value;
  //     console.log(prevState);
  //   });
  //   console.log(date);
  // };
  // const onChangeYear = value => {
  //   setDate({ ...date, year: value });
  // };
  //const [month, setMonth] = useState(0);
  //const [year, setYear] = useState(0);

  // useEffect(() => {
  //   if (!month && year) return;
  //   dispatch(getTransSumThunk({ month, year }));
  //   //console.log('qwerty');
  // }, [dispatch, month, year]);

  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    dispatch(getTransSumThunk({ month: Number(month), year: Number(year) }));
  }, [dispatch, month, year]);

  useEffect(() => {
    if (summary?.length) return;
    notifyEmptySummary();
    // if (!summary?.length) {
    //   console.log('i dollar');
    // }
  }, [summary]);

  // if (!summary[0]?.name) {
  //   notifyEmptySummary();
  // }

  //console.log(summary.length);
  //console.log(summary[0].name);

  const handleSelectMonth = event => {
    //console.log(1);
    setMonth(event.value);
  };

  const handleSelectYear = event => {
    //console.log(2);
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

  const currentMonth = {
    value: date.getMonth(),
    label: date.toLocaleDateString('en-US', options),
  };

  const currentYear = {
    value: date.getFullYear(),
    label: date.getFullYear(),
  };

  console.log(summary?.length);
  // if (!summary?.length) {
  //   notifyEmptySummary();
  // }
  return (
    <StyledSelectWrapper>
      <Select
        options={optionsMonth}
        onChange={handleSelectMonth}
        styles={selectStyles}
        nameOfSelect={'month'}
        defaultValue={currentMonth}
      />
      <Select
        options={optionsYear}
        onChange={handleSelectYear}
        styles={selectStyles}
        nameOfSelect={'year'}
        defaultValue={currentYear}
      />
    </StyledSelectWrapper>
  );
};
