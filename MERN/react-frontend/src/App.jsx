import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios';
const state={
  allDoc:[]
}
function App() {
  const [count, setCount] = useState(state.allDoc)
  useEffect(()=>{
    const get_all=async()=>{
      let data=await axios("http://localhost:3000/")
      setCount(data.data)
      // console.log(data.data)
      
      
      
    }
    get_all()
  },[state.allDoc])
  console.log(count)

  return (

    <>
      {count.map((map,i)=>{
        return( <>
        <div >
        <h1 >name:{map.name}</h1>
        <h1 >Email:{map.email}</h1>
        
        </div>
        </>)
      })} 
     {/* <h1>{data}</h1> */}
    </>
  )
}

export default App
