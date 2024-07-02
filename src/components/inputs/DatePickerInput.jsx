import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerInput = ({ selectedDate, handleChange, name }) => {
  return (
    <div className="rounded-lg border-3 border-primary focus:border-2">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        showIcon
        isClearable
        placeholderText="Sélectionnez une date"
        showMonthYearPicker
        dateFormat="MM/yyyy"
        className="red-border"
        name={name}
      />
    </div>
  );
};

export default DatePickerInput;
