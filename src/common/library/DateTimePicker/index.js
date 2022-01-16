import React, { useState, useEffect } from 'react';
import { Picker } from '../PickerUI';
import { month, maxDay, days, hours, minutes } from './data.json';

export default props => {

  const { show = false, defaultSelect=new Date(), onChange, onCancel, minYear=1950, maxYear=(new Date(defaultSelect).getFullYear() + 100), ...others } = props;

  const [years, setYears] = useState([]);
  const [dateDay, setDateDay] = useState([...days]);
  
  const [selected, setSelected] = useState([]);
  const [pickerKey, setPickerKey] = useState('date-picker');

  useEffect(() => {
    const _selectedYear = new Date(defaultSelect).getFullYear();
    let _years = [];
    let _defaultYear = 0;
    for (let n = 0; n < maxYear; n=n+1) {
      const _year = minYear + n;
      if(_selectedYear === _year) {
        _defaultYear = n;
      }
      _years.push({ label: `${_year}年`, code: _year });
      
    }
    setYears(_years);
    const _selectMonth = new Date(defaultSelect).getMonth();
    const _selectDay = new Date(defaultSelect).getDate() - 1;
    setSelected([_defaultYear, _selectMonth, _selectDay]);
  }, []);

  useEffect(()=>{
    setPickerKey('date-picker-selected');
  },[selected]);

  return (
    <Picker
      key={pickerKey}
      defaultSelect={selected}
      onGroupChange ={(item,i,groupIndex,selected)=>{
        const _year = years[selected[0]].code;
        const _month = selected[1];
        const _days =  _month === 1 ? [...days].splice(0, (_year % 4 === 0 ? 29 : 28)) :
        (
          (maxDay.indexOf(`${_month + 1}`) > -1) ? [...days] : [...days].splice(0, days.length - 1)
        );
        setDateDay([..._days]);
      }}
      onChange={(selecteds) => {
        const content = `${years[selecteds[0]].code}-${month[selecteds[1]].code}-${dateDay[selecteds[2]].code} ${hours[selecteds[3]].code}:${minutes[selecteds[4]].code}`;
        const _date = new Date(`${content}`)
        return typeof onChange === 'function' && onChange(selecteds, content, _date);
      }}
      groups={[
        {items: years},
        {items: [...month]},
        {items: dateDay},
        {items: hours},
        {items: minutes}
      ]}
      lang={{ leftBtn: '取消', rightBtn: '确定' }}
      show={show}
      onCancel={e => typeof onCancel === 'function' && onCancel(e)}
      {...others}
    />  
  );
}
