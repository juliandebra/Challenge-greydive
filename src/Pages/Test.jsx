import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import simulacr from '../assets/logo-simulacr.png'


const Test = () => {
  return (
    <div>
        <img src={simulacr} alt="" />
        <Link to='/test/viamo'><h3>Viamo Testing</h3></Link>
        <Link to='/test/nebula'><h3>Nebula Testing</h3></Link>
        <Outlet/>
    </div>
  )
}

export default Test
