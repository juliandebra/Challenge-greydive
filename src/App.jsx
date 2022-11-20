import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Tester from './Components/Tester'
import Home from './Pages/Home'
import Test from './Pages/Test'

function App() {


    
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='test' element={<Test/>}>
          <Route path=':testeador' element={<Tester />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
