import { useState } from 'react'
import NewU from './components/Newu'

function App() {
const state={
  gunshots:0
}
const [count, setCount] = useState(state.gunshots)

const shots=()=>{
setCount(count+1)
}
  return (
    <>
  <h1 onMouseMove={shots}> user1 gunshots:{count}</h1>
  <NewU />
    </>
  )
}

export default App
