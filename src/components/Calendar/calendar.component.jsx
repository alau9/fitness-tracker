import { useState, useEffect } from "react";
import moment from "moment";
import "./calendar.styles.scss";
import buildCalendar from "./build";
import CalendarHeader from "./header";
import Header from "../header/header.component";
import useUser from "../../hooks/use-user";
import { useNavigate } from "react-router-dom";


const Calendar = ({ user: loggedInUser }) => {
  const { user, setActiveUser } = useUser(loggedInUser?.uid);
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [routine, setRoutine] = useState(user?.routineLog);
  const navigate = useNavigate();

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  useEffect(() => {
    setRoutine(user?.routineLog);
  }, [user]);

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

  const hasWorkoutStyle = (day, routines) => {
    if (
      routines?.filter((routine) => day.isSame(routine.date, "day")).length !==
      0
    ) {
      return "workout";
    }
  };

  const filterRoutineLog = (day, routines) => {
    return routines?.filter((routine) => day.isSame(routine.date, "day"));
  };

  return (
    <div className="calendar">
      <CalendarHeader value={value} setValue={setValue} />
      <div className="body">
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div className="day" onClick={() => setValue(day)}>
                {
                  <div
                    className={`${dayStyles(day)} ${hasWorkoutStyle(
                      day,
                      routine
                    )}`}
                  >
                    {day.format("D")}
                  </div>
                }
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>{filterRoutineLog(value, routine)?.map((day) => (
        <div>name:{day.name} reps:{day.rep} set:{day.set} weight:{day.weight}</div>
      ))}</div>
    </div>
  );
};

export default Calendar;
