import { useState } from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import { Layout } from './components/pages/layout'
import Contact from './components/pages/contact'
import Logreg from './components/pages/auth/logreg'
import Forget_password from './components/pages/auth/forget_password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='contact' element={<Contact/>}></Route>


    </Route>
      <Route path='/logreg' element={<Logreg/>}></Route>
      <Route path='/forgot' element={<Forget_password/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
