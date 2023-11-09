import React, { useEffect, useState } from "react";
import MonthlyCalendar from "./MonthlyCalendar.jsx";
import WeeklyCalendar from "./WeeklyCalendar.jsx";
import CalendarHeader from "./CalendarHeader.jsx";
import { getMonthYear } from "../service/monthly.service.js";


export default function Calendar({ habitsData }) {
    const CURRENT_DATE = new Date()
    const CURRENT_DATE_YYMMDD = CURRENT_DATE.toISOString().split("T")[0]
    const [clickedDay, setClickedDay] = useState(
        CURRENT_DATE.toISOString().split("T")[0]
    );
    const [monthCalendar, setMonthCalendar] = useState(true);
    const [displayMonthYear, setDisplayMonthYear] = useState(
        getMonthYear(new Date(clickedDay).getFullYear(), new Date(clickedDay).getMonth(),1)
    );

    function handleMonthCalendar() {
        setMonthCalendar((prevState) => !prevState);
    }

    function handleCLickedDay(date) {
        setClickedDay(date);
        console.log(date);
    }

    return (
        <div>
            <CalendarHeader 
                monthCalendar={monthCalendar} 
                onSetMonthCalendar={handleMonthCalendar} 
                displayMonthYear={displayMonthYear}
                onClickedDay={setClickedDay}
                clickedDay={clickedDay}
            />
            {monthCalendar ? (
                <MonthlyCalendar
                    currentDate={CURRENT_DATE_YYMMDD}
                    habitsData={habitsData}
                    clickedDay={clickedDay}
                    onClickedDay={handleCLickedDay}
                />
            ) : (
                <WeeklyCalendar
                    currentDate={CURRENT_DATE_YYMMDD}
                    habitsData={habitsData}
                    clickedDay={clickedDay}
                    onClickedDay={handleCLickedDay}
                />
            )}
        </div>
    );
}
