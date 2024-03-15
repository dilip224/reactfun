import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import colorRecuder from '../features/changeColor/colorSclice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter1:colorRecuder,
  },
})