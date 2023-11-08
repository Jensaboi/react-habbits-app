import React, { useEffect, useState } from "react";
import MonthlyCalendar from "./MonthlyCalendar.jsx";
import WeeklyCalendar from "./WeeklyCalendar.jsx";
import { getMonthYear } from "../service/monthly.service.js";

export default function Calendar({ habitsData }) {
    const [clickedDay, setClickedDay] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [monthCalendar, setMonthCalendar] = useState(true);
    const [weekNav, setWeekNav] = useState(0);
    const [monthNav, setMonthNav] = useState(0);
    const [displayMonthYear, setDisplayMonthYear] = useState(
        getMonthYear(
            new Date().getFullYear(),
            new Date().getMonth() + monthNav,
            new Date().getDate()
        )
    );

    function onSetWeekNav(num) {
        setWeekNav((prevState) => prevState + num);
    }

    function onSetMonthNav(num) {
        setMonthNav((prevState) => prevState + num);
    }

    function handleMonthCalendar() {
        setMonthCalendar((prevState) => !prevState);
    }

    function handleCLickedDay(date) {
        setClickedDay(date);
        console.log(date);
    }

    return (
        <div>
            <div>
                <button onClick={handleMonthCalendar}>
                    Change to {monthCalendar ? "Weekly view" : "Monthly view"}
                </button>
            </div>
            <div className="calendar-header-container">
                <div>
                    <button
                        onClick={
                            monthCalendar
                                ? () => {
                                      onSetMonthNav(-1);
                                  }
                                : () => {
                                      onSetWeekNav(-1);
                                  }
                        }>
                        Back
                    </button>
                    <button
                        onClick={
                            monthCalendar
                                ? () => {
                                      onSetMonthNav(1);
                                  }
                                : () => {
                                      onSetWeekNav(1);
                                  }
                        }>
                        Next
                    </button>
                </div>
                <h3>{displayMonthYear}</h3>
            </div>
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
