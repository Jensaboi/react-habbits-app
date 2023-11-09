import React from "react"

export default function CalendarHeader({monthCalendar, onSetMonthCalendar, displayMonthYear, onClickedDay, clickedDay}){


    return(
        <div className="calendar--header">
            <button onClick={onSetMonthCalendar}>
                Change to {monthCalendar ? "Weekly view" : "Monthly view"}
            </button>
            <div className="calendar--header-btn-container">
                <button>Back</button>
                <p>{monthCalendar ? "Month" : "Week"}</p>
                <button>Next</button>
                <h3 className="calendar--header-display-text">{displayMonthYear}</h3>
            </div>
        </div>
    )
}