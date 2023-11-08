import React, { useState } from "react";
import MonthlyCalendar from "./MonthlyCalendar.jsx";
import CalendarHeader from "./CalendarHeader.jsx";
import WeeklyCalendar from "./WeeklyCalendar.jsx";

export default function Calendar({ habitsData }) {
  const [clickedDay, setClickedDay] = useState(null);
  const [monthNav, setMonthNav] = useState(0);
  const [monthCalendar, setMonthCalendar] = useState(true);
  const [weekNav, setWeekNav] = useState(0);

  function handleMonthCalendar() {
    setMonthCalendar((prevState) => !prevState);
  }
  //month
  function handleIncrementMonthNav() {
    setMonthNav((prevState) => prevState + 1);
  }

  function handleDecrementMonthNav() {
    setMonthNav((prevState) => prevState - 1);
  }
  //week
  function handleIncrementWeekNav() {
    setWeekNav((prevState) => prevState + 1);
  }

  function handleDecrementWeekNav() {
    setWeekNav((prevState) => prevState - 1);
  }
  //clicked day
  function handleCLickedDay(date) {
    setClickedDay(date);
    console.log(date)
  }
  return (
    <div>
      <div>
        <button onClick={handleMonthCalendar}>
          Change to {monthCalendar ? "Weekly view" : "Monthly view"}
        </button>
      </div>
      <CalendarHeader
        isMonthCalendar={monthCalendar}
        decrementMonthNav={handleDecrementMonthNav}
        incrementMonthNav={handleIncrementMonthNav}
        inCrementWeekNav={handleIncrementWeekNav}
        decrementWeekNav={handleDecrementWeekNav}
      />
      {monthCalendar ? (
        <MonthlyCalendar
          nav={monthNav}
          habitsData={habitsData}
          clickedDay={clickedDay}
          onClickedDay={handleCLickedDay}
        />
      ) : (
        <WeeklyCalendar
          nav={weekNav}
          habitsData={habitsData}
          clickedDay={clickedDay}
          onClickedDay={handleCLickedDay}
        />
      )}
    </div>
  );
}
