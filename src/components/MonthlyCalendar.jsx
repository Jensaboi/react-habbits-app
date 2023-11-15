import React, { useEffect, useState } from "react";
import { DAY_NAMES } from "../data/data.js";
import { getPaddingDays, getMonthYear } from "../service/monthly.service.js";

export default function MonthlyCalendar({
    habitsData,
    clickedDay,
    onClickedDay,
    currentDate
}) {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        let dt = new Date(clickedDay);

        let date = dt.getDate();
        let year = dt.getFullYear();
        let month = dt.getMonth();

        let paddingDays = getPaddingDays(year, month);
        let totalDaysInMonth = new Date(year, month + 1, 0).getDate();

        let daysArray = [];
        for (let i = 1; i <= totalDaysInMonth + paddingDays; i++) {
            let dateString = new Date(year, month, i - paddingDays + 1)
                .toISOString()
                .split("T")[0];
            if (i <= paddingDays) {
                daysArray.push({
                    date: dateString,
                    value: dateString.split("-")[2],
                    isCurrentDate: false,
                    isPaddingDay: true,
                    isClickedDay: dateString === clickedDay,
                });
            } else {
                daysArray.push({
                    date: dateString,
                    value: dateString.split("-")[2],
                    isCurrentDate: dateString === currentDate,
                    isPaddingDay: false,
                    isClickedDay: dateString === clickedDay,
                });
            }
        }
        setDates(daysArray);
    }, [clickedDay, habitsData]);

    return (
        <>
            <div className="calendar-container">
                {DAY_NAMES.map((name) => (
                    <p className="calendar--weekday-names" key={name}>
                        {name}
                    </p>
                ))}
                {dates.map((date, index) => {
                    return (
                        <div
                            key={index}
                            className="monthly--date-container"
                            onClick={
                                !date.isPaddingDay
                                    ? () => {
                                          onClickedDay(date.date);
                                      }
                                    : null
                            }
                            style={{
                                backgroundColor: date.isCurrentDate
                                    ? "lightblue"
                                    : "white",
                                border:
                                    date.isClickedDay && !date.isPaddingDay
                                        ? "1px solid red"
                                        : date.isPaddingDay
                                        ? "none"
                                        : "1px solid black",
                            }}
                        >
                            {date.value}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
