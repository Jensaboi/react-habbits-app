import React, { useState } from "react"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default function CreateHabbitModal(){
    const [ formData, setFormData ] = useState(
        {
            startDate: "",
            endDate: "",
            days: "",
            title: "",
        }
    )
        console.log(formData)
    function handleChange(event){
        const {name, type, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,


            }
        })
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="title">Habbit title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="e.g. Workout..."
                        onChange={handleChange}
                        value={formData.title}
                        name="title"
                    />
                    <label htmlFor="timeOnDay"></label>
                    <select name="timeOnDay">
                        <option>All day</option>
                        <option>Mornings</option>
                        <option>Evenings</option>
                        <option>Nights</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        id="startDate"
                        type="date"
                        name="startDate"
                        onChange={handleChange}
                        value={formData.startDate}
                    />
                    <label htmlFor="endDate">End Date</label>
                    <input
                        id="endDate"
                        type="date"
                        name="endDate"
                        onChange={handleChange}
                        value={formData.endDate}
                    />
                </div>

                <div>
                    <label htmlFor="days">Days</label>
                </div>
            </form>

            <button>Create Habbit</button>
        </div>
    )
}