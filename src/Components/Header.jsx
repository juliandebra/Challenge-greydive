import { Link, useNavigate } from 'react-router-dom'
import simulacr from '../assets/logo-simulacr.png'
import db from '../db.json'

const Header = () => {
    const navigate = useNavigate()
  return (
    <div className='header'>
        <img src={simulacr} alt="" className='logo' onClick={() => navigate('/')} />
        {db.map(link => (
          <Link to={`/test/${link.cliente}`}>
            <h4 className='links'>{link.cliente}</h4>
          </Link>
        ))}
    </div>
  )
}

export default Header
