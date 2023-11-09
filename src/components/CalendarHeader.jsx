import React, { useEffect } from "react"

export default function CalendarHeader({monthCalendar, onSetMonthCalendar, displayMonthYear, onClickedDay, clickedDay}){

    function navigateForward(){
        let dt = new Date(clickedDay)
        let year = dt.getFullYear()
        let month = dt.getMonth()
        let date = dt.getDate()
        if(monthCalendar){
            let dateString = new Date(year, month + 1, 2).toISOString().split("T")[0]
            onClickedDay(dateString)
        }else{
            let dateString = new Date(year,month, date + 7).toISOString().split("T")[0]
            onClickedDay(dateString)
        }
    }

    function navigateBack(){
        let dt = new Date(clickedDay)
        let year = dt.getFullYear()
        let month = dt.getMonth()
        let date = dt.getDate()
        if(monthCalendar){
            let dateString = new Date(year, month - 1, 2).toISOString().split("T")[0]
            onClickedDay(dateString)
        }else{
            let dateString = new Date(year,month, date - 7).toISOString().split("T")[0]
            onClickedDay(dateString)
        }
    }

    return(
        <div className="calendar--header">
            <button onClick={onSetMonthCalendar}>
                Change to {monthCalendar ? "Weekly view" : "Monthly view"}
            </button>
            <div className="calendar--header-btn-container">
                <button onClick={navigateBack}>Back</button>
                <p>{monthCalendar ? "Month" : "Week"}</p>
                <button onClick={navigateForward}>Next</button>
                <h3 className="calendar--header-display-text">{displayMonthYear}</h3>
            </div>
        </div>
    )
}