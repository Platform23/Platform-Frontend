import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => setSelectedDate(date);

  return (
    <div className="rounded-lg border-3 border-primary focus:border-2">
        <DatePicker 
          selected={selectedDate} 
          onChange={handleChange} 
          showIcon
          isClearable
          placeholderText="Select a date" 
          showMonthYearPicker
          dateFormat="MM/yyyy"
          className="red-border"
        />
    </div>
  );
};

export default DatePickerInput;
