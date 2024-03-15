
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'
import {Theme} from "./features/changeColor/theme"
import './App.css'


function App() {
  const count = useSelector((state) => state.counter.value)   //count ma vako value ho use vako count . value
  const color = useSelector((state) => state.counter1.value)   //count ma vako value ho use vako count . value
  const dispatch = useDispatch()

  return (
    <>
<div style={{color:color,fontSize:'30px'}} >
      <div>
        <Theme />
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    </>
  )
}

export default App
