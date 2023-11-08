import React, {useState} from "react"
import { DAY_NAMES } from "../data/data.js"


export default function WeeklyCalendar({weekNav,habitsData, clickedDay, onClickedDay}){

    return (

        <div className="calendar-container">
            {DAY_NAMES.map(name => <p className="calendar--weekday-names" key={name}>{name}</p>)}
        </div>
    )
}