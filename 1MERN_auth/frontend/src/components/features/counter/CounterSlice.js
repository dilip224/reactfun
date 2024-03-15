import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    id: ''
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.id = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {  incrementByAmount } = counterSlice.actions

export default counterSlice.reducer