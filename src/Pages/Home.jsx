import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import simulacr from '../assets/logo-simulacr.png'
const Home = () => {


  return (
    <div>
        <img src={simulacr} alt="" />
        <Link to='/test/viamo'><h3>Viamo Testing</h3></Link>
        <Link to='/test/nebula'><h3>Nebula Testing</h3></Link>
    </div>
  )
}

export default Home
