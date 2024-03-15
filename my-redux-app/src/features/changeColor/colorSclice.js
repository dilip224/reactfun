import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }
//or

const initialState1 = {
    value: '',  //yo value hoo use vako 
  }

export const colorSlice = createSlice({
  name: 'color',
//   initialState, //or
  initialState:initialState1,
  reducers: {

    Changeclr: (state, action) => {
      state.value = action.payload
      console.log(state.value)
    },
  },
})

// Action creators are generated for each case reducer function
export const { Changeclr } = colorSlice.actions

export default colorSlice.reducer