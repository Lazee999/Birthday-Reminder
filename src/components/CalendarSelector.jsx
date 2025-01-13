import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarSelector = ({ selectedDate, onChange }) => {
  return (
    <div className="calendar-container">
      <Calendar value={selectedDate} onChange={onChange} />
    </div>
  );
};

export default CalendarSelector;
