import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Home'
import Calendar from './Calendar'
import Calendarweek from './calendar/Calendarweek'
import Calendarday from './calendar/Calendarday'
import Calendarmonth from './calendar/Calendarmonth'
import CalendarLayout from './components/CalendarLayout'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='calendar' element={<CalendarLayout />}>
            <Route index element={<Calendarweek/>}/>
            <Route path='week' element={<Calendarweek/>}>
              <Route path=':id' element={<Calendarweek />}/>
            </Route>
            <Route path='day' element={<Calendarday/>}>
              <Route path=':id' element={<Calendarday />}/>
            </Route>
              <Route path='month' element={<Calendarmonth/>}>
            <Route path=':id' element={<Calendarmonth />}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
