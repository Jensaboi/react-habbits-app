import React, { useState } from "react"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default function AddHabbitModal(){
    const [ formData, setFormData ] = useState(
        {
            startDate: null,
            endDate: "",
            days: ""
        }
    )

    function handleChange(event){
        const {name, type, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div>
            <form>
                <DatePicker 
                    selected={formData.startDate}
                    onChange={handleChange}
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                    />
                <DatePicker />
            </form>
        </div>
    )
}