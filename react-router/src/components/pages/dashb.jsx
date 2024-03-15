import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Dash = () => {
    let data={
        'hell':"welcome"
    }
    const Nevicate=useNavigate()
    return (
<>
    <div>DashBoard</div>
        <button onClick={()=>{Nevicate("/logout"),{state:data}}}>logout</button>
</>    
  )
}
