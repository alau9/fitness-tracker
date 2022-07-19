import { useState, useEffect } from "react";
import moment from "moment";
import "./calendar.styles.scss";
import buildCalendar from "./build";
import CalendarHeader from "./header";

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  const isSelected = (day) => {
    return value.isSame(day, "day");
  };


  const isToday = (day) => {
    return day.isSame(new Date(), "day");
  };

  const dayStyles = (day) => {
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  };



  return (
    <div className="calendar">
      <CalendarHeader value={value} setValue={setValue} />
      <div className="body">
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div className="day" onClick={() => setValue(day)}>
                {<div className={dayStyles(day)}>{day.format("D")}</div>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
