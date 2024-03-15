import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Layout } from './components/pages/Layout'
import { Dash } from './components/pages/dashb'
import { Homes } from './components/pages/homes'
import { Login } from './components/pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route   path='dash' element={<Dash/>}/> {/* yo vanakao /dash ho   */}
                <Route   path='Login' element={<Login/>}/>
                <Route   index element={<Homes/>}/>

              </Route>
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
