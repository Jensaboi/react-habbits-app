import React, { useEffect, useState } from "react";
import { DAY_NAMES } from "../data/data.js";

export default function WeeklyCalendar({
    habitsData,
    clickedDay,
    onClickedDay,
    currentDate
}) {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        let dt = new Date(clickedDay);

        let year = dt.getFullYear();
        let month = dt.getMonth();
        let date = dt.getDate();
        let dayName = dt.getDay();
        if(dayName === 0){
            dayName = 7;
        }
        let monday = date - dayName + 1;


        let datesArray = [];
        for (let i = 0; i < 7; i++) {
            let dateString = new Date(year, month, monday + 1 + i)
                .toISOString()
                .split("T")[0];

            datesArray.push({
                date: dateString,
                value: dateString.split("-")[2],
                isCurrentDate: dateString === currentDate,
                isClickedDay: dateString === clickedDay,
            });
        }

        setDates(datesArray);
    }, [clickedDay]);
    
    return (
        <div className="calendar-container">
            {DAY_NAMES.map((name) => (
                <p className="calendar--weekday-names" key={name}>
                    {name}
                </p>
            ))}
            {dates.map((day, index) => {
                return (
                    <div
                        key={index}
                        className="weekly-calendar--date-container"
                        onClick={() => {
                            onClickedDay(day.date);
                        }}
                        style={{
                            backgroundColor: day.isCurrentDate
                                ? "lightblue"
                                : "transparent",
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
