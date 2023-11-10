import React, { useEffect } from "react";

export default function CalendarHeader({
    monthCalendar,
    onSetMonthCalendar,
    displayMonthYear,
    onClickedDay,
    clickedDay,
    currentDate,
    currentDateStr,
}) {
    function navigateForward() {
        let dt = new Date(clickedDay);
        let year = dt.getFullYear();
        let month = dt.getMonth();
        let date = dt.getDate();

        if (monthCalendar) {
            let newDay = new Date(year, month + 1, 2);
            if (
                newDay.getFullYear() === currentDate.getFullYear() &&
                newDay.getMonth() === currentDate.getMonth()
            ) {
                onClickedDay(currentDateStr);
            } else {
                let dateString = newDay.toISOString().split("T")[0];
                onClickedDay(dateString);
            }
        } else {
            let day = dt.getDay();
            let monday = date - day + 1;
            let newDay = new Date(year, month, monday + 8);

            let dateString = newDay.toISOString().split("T")[0];
            onClickedDay(dateString);
        }
    }

    function navigateBack() {
        let dt = new Date(clickedDay);
        let year = dt.getFullYear();
        let month = dt.getMonth();
        let date = dt.getDate();

        if (monthCalendar) {
            let newDay = new Date(year, month - 1, 2);
            if (
                newDay.getFullYear() === currentDate.getFullYear() &&
                newDay.getMonth() === currentDate.getMonth()
            ) {
                onClickedDay(currentDateStr);
            } else {
                let dateString = newDay.toISOString().split("T")[0];
                onClickedDay(dateString);
            }
        } else {
            let day = dt.getDay();
            let monday = date - day + 1;
            let newDay = new Date(year, month, monday - 6);

            let dateString = newDay.toISOString().split("T")[0];
            onClickedDay(dateString);
        }
    }

    return (
        <div className="calendar--header">
            <button onClick={onSetMonthCalendar}>
                Change to {monthCalendar ? "Weekly view" : "Monthly view"}
            </button>
            <div className="calendar--header-btn-container">
                <button onClick={navigateBack}>Back</button>
                <p>{monthCalendar ? "Month" : "Week"}</p>
                <button onClick={navigateForward}>Next</button>
                <h3 className="calendar--header-display-text">
                    {displayMonthYear}
                </h3>
            </div>
        </div>
    );
}
