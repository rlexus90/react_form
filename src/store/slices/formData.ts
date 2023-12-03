import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFormData } from '../../types/formDataTypes';

const initialData: IFormData = {
  name: '',
  age: 0,
  email: '',
  pasword1: '',
  pasword2: '',
  gender: `Somsing else`,
  acceptT_C: false,
  picture: '',
  country: '',
};

interface IinitialState {
  firstForm: Array<IFormData>;
  secondForm: Array<IFormData>;
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
