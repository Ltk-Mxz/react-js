import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { About, Contact, Service, Home} from './components/pages'

function App() {
  return <div className='App'>
    <Navbar />
    <Routes>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
  </div>
}

export default App