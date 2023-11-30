import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import formData from './slices/formData';

const rootReduser = combineReducers({
  formData,
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
