import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type IinitialState = {
  countries: string[];
};

const initialState: IinitialState = {
  countries: [],
};

export const countrySlice = createSlice({
  name: 'countrySlice',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      if (state.countries.includes(action.payload)) return;
      state.countries.push(action.payload);
    },
    delCountry: (state, action: PayloadAction<string>) => {
      if (!state.countries.includes(action.payload)) return;
      const i = state.countries.indexOf(action.payload);
      state.countries.splice(i, 1);
    },
  },
});

export const { setCountry, delCountry } = countrySlice.actions;

export default countrySlice.reducer;
