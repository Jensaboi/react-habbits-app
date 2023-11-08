import React, { useEffect, useState } from "react";
import { DAY_NAMES } from "../data/data.js";

export default function WeeklyCalendar({
    nav,
    habitsData,
    clickedDay,
    onClickedDay,
}) {
    const [days, setDays] = useState([]);

    useEffect(() => {
        let dt = new Date();

        if (nav !== 0) {
            dt.setDate(new Date().getDate() + nav * 7);
        }

        let year = dt.getFullYear();
        let month = dt.getMonth();
        let date = dt.getDate();
        let dayName = dt.getDay();
        let monday = date - dayName + 1;

        let datesArray = [];
        for (let i = 0; i < 7; i++) {
            let dateString = new Date(year, month, monday + 1 + i)
                .toISOString()
                .split("T")[0];

            datesArray.push({
                date: dateString,
                value: dateString.split("-")[2],
                isCurrentDate: monday + i === date && nav === 0,
                isClickedDay: dateString === clickedDay,
            });
        }

        setDays(datesArray);
    }, [nav]);
    return (
        <div className="calendar-container">
            {DAY_NAMES.map((name) => (
                <p className="calendar--weekday-names" key={name}>
                    {name}
                </p>
            ))}
            {days.map((day, index) => {
                return (
                    <div
                        key={index}
                        className="weekly-calendar--date-container"
                        onClick={() => {
                            onClickedDay(day.date);
                        }}
                        style={{
                            backgroundColor: day.isCurrentDate
                                ? "green"
                                : "white",
                            border: day.isClickedDay
                                ? "1px solid red"
                                : "1px solid black",
                        }}>
                        {day.value}
                    </div>
                );
            })}
        </div>
    );
}
