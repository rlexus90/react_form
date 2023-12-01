import { RouterProvider } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { router } from './control/router/router';

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
