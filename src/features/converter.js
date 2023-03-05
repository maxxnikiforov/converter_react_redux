import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from '../variables/initialState';

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    toSwitchData: state => state.switchData = !state.switchData,
    changeOperation: (state, action) => {
      state.operation = action.payload
    },
    chooseLeftCurrency: (state, action) => {
      state.leftCurrency = action.payload
    },
    chooseRightCurrency: (state, action) => {
      state.rightCurrency = action.payload
    },
  }
})

export const {
  toSwitchData,
  changeOperation,
  chooseLeftCurrency,
  chooseRightCurrency,
} = converterSlice.actions;

export default converterSlice.reducer;
