import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const Test = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Test
