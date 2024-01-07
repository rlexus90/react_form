import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { setupStore } from './store/store.ts';
import { COUNTRIES } from './common/countries.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './control/router/router.tsx';

const store = setupStore({
  countrySlice: { countries: COUNTRIES },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
