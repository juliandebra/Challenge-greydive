import { Routes, Route} from 'react-router-dom'
import './App.css'
import Tester from './Components/Tester'
import Home from './Pages/Home'
import Test from './Pages/Test'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='test' element={<Test/>}>
          <Route path=':testeador' element={<Tester />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
