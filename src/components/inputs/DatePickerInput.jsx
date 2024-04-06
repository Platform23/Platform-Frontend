import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => setSelectedDate(date);

  return (
    <DatePicker selected={selectedDate} onChange={handleChange} className="rounded-lg border-3 border-primary focus:border-1"/>
  );
};

export default DatePickerInput;
