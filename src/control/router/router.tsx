import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Main } from '../../pages/Main/Main';
import { Form1 } from '../../pages/Form1/Form1';
import { Form2 } from '../../pages/Form2/Form2';
import { Page404 } from '../../pages/Page404/Page404';
import App from '../../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/main" replace /> },
      { path: 'main', element: <Main /> },
      { path: 'form1', element: <Form1 /> },
      { path: 'form2', element: <Form2 /> },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);
