import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './components/pages/layout'
import Logreg from './components/pages/auth/logreg'
import Contact from './components/pages/contact'
import Forgot from './components/pages/forgot'
import Changepass from './components/pages/newpass'
import Dashboard from './components/pages/dashboard'
import { gettoken } from './services/localsession'
import Pagenotfound from './components/pages/pagenotfound'
import { useEffect, useState } from 'react'

function App() {
  const [error,setError]=useState({
    "isToken":false
  })

  const token=gettoken("token")
  console.log(token)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='logreg' element={<Logreg/>}></Route>
            {/* {
              !token ? (
                ):(
                  ""
                  )
            } */}

            <Route path='dashboard' element={<Dashboard/>}></Route>

          </Route>
          <Route path='/forgot' element={<Forgot/>}></Route>
          <Route path='/change/:id' element={<Changepass/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
