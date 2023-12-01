import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import formData from './slices/formData';
import countrySlice from './slices/countrySlice';

const rootReduser = combineReducers({
  formData,
  countrySlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReduser,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type StoreType = ReturnType<typeof setupStore>;
export type AppDispatch = StoreType['dispatch'];
