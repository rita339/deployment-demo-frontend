import Nav from './components/Nav.jsx'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
