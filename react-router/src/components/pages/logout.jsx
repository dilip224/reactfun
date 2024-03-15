import React from 'react'
import { useLocation } from 'react-router-dom'


export const Logout = () => {
    let location=useLocation()
    console.log(location)
  return (
    <div>Logout {location.state}</div>
  )
}
