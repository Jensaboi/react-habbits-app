import React from "react";

export default function CalendarHeader({
    isMonthCalendar,
    incrementMonthNav,
    decrementMonthNav,
}) {
    let num;
    if (isMonthCalendar) {
        num = 1;
    } else {
        num = 7;
    }
    return (
        <div className="calendar-header-container">
            <button onClick={() => decrementMonthNav(num)}>Back</button>
            <h2></h2>
            <button onClick={() => incrementMonthNav(num)}>Next</button>
        </div>
    );
}
