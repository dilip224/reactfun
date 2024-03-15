import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import './App.css'
import { Home } from './components/pages/Home'
import { About } from './components/pages/about'
import { Contact } from './components/pages/conatct'
import { Navbar } from './components/pages/navbar'
import { Props } from './components/pages/props'
import { Dash } from './components/pages/dashb'
import { Login } from './components/pages/login'
import { Logout } from './components/pages/logout'

function App() {
  let isL=true
  let state={
    'dt':"data"
  }
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/* <Route  path='/' element={<h1>react router dom</h1>} /> */}
      <Route  path='/' element={<Home/>} />
      <Route  path='/about' element={<About/>} />
      <Route  path='/contact' element={<Contact/>} />
      <Route  path='/login' element={<Login/>} />
      <Route  path='/logout' element={<Logout/>} />
      <Route  path='/dash' element={isL?<Dash  />: <Navigate to='/login' replace={true}  state={{"data":"notfound"}} /> } />
      <Route  path='/prop/:value' element={<Props/>} />
      <Route  path='*' element={ <h1>404: page not found</h1> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
