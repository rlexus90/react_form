import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialData = {
  name: '',
  age: 0,
  email: '',
  pasword: '',
  gender: '',
  acceptT_C: false,
  picture: '',
  country: '',
};

interface IinitialState {
  firstForm: Array<typeof initialData>;
  secondForm: Array<typeof initialData>;
}

const initialState: IinitialState = {
  firstForm: [],
  secondForm: [],
};

export const formData = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFirstFormData: (state, action: PayloadAction<typeof initialData>) => {
      state.firstForm.push(action.payload);
    },
    setSecondFormData: (state, action: PayloadAction<typeof initialData>) => {
      state.secondForm.push(action.payload);
    },
  },
});

export const { setFirstFormData, setSecondFormData } = formData.actions;

export default formData.reducer;
