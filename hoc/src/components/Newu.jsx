import { useState } from 'react'


function NewU() {
const state={
  gunshots:0
}
const [count, setCount] = useState(state.gunshots)

const shots=()=>{
setCount(count+1)
}
  return (
    <>
  <h1 onMouseMove={shots}>user2 gunshots:{count}</h1>
    </>
  )
}

export default NewU
