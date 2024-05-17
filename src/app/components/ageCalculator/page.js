'use client'
import React from 'react'
import { useState } from "react"
import Datepicker from "tailwind-datepicker-react"
const options = {
  title: "Pick up your date of birth",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  clearBtnText: "Clear",
  maxDate: new Date(),
  minDate: new Date("1950-01-01"),
  theme: {
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span>Prev</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: "top-12",
  selected: "2022-01-01",
  language: "en",
  disabledDates: [],
  weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholder: "Select your date of birth",
  inputDateFormatProp: {
    day: "numeric",
    month: "long",
    year: "numeric"
  },
}

const AgeCalculator = () => {
    const [show, setShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState(options.selected)
    const [ageResult, setAgeResult]= useState('')
    const handleChange = (selectedDate) => {
      setSelectedDate(selectedDate)
    }
    const handleClose = (state) => {
      setShow(state)
    }
    const handleSubmit = () => {
      const currentDate = new Date();
      if (selectedDate) {
        const birthDate = new Date(selectedDate);
        const ageDifference = currentDate - birthDate;
    
        // Convert age difference to years, months, and days
        const years = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((ageDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((ageDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    
        const result=(`Your age is: ${years} years, ${months} months, ${days} days`);
        setAgeResult(result)
        
      } else {
        console.log("Please select a date of birth.");
      }
    }
  
    const handleClear=()=>{
      setSelectedDate(options.selected)
      setAgeResult('')
    }
  return (
    <>
      <section className="h-screen text-center">
        <h1 className="text-3xl font-serif font-bold text-blue-700 my-10 p-5">Age Calculator</h1>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto p-10">
            <h1 className="text-xl font-serif font-bold mb-5">Select your date of birth</h1>
            <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
            <button type="button" onClick={handleSubmit} className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-5">Submit</button>
            <button type="button" onClick={handleClear} className=" text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-5">Clear</button>
        </div>
        <h1 className="my-5 font-serif text-2xl text-green-600">{ageResult}</h1>
      </section>
    </>
  )
}

export default AgeCalculator
