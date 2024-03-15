import React from 'react'
import { useLocation } from 'react-router-dom'

export const Login = () => {
    let data=useLocation()
    console.log(data)
  return (
    <>
    <div>Login</div>
    {/* <div>{data.state}</div> */}
    </>
  )
}
