import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Changeclr} from '../changeColor/colorSclice'


export const Theme = () => {
  // const color=useSelector((state)=>{state.counter1.value})
  const dispatch = useDispatch()
  const[defValue,setColor]=useState("white")
    // useEffect(()=>{console.log(defValue)},[defValue])
  return (
    <div>
        <input type="text" onChange={
          (e)=>{
            setColor(e.target.value);
           
           }} />
    <button onClick={()=>dispatch(Changeclr(defValue))}  >Change</button>
    </div>
  )
}
