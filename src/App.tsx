import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ErrorBoundary } from 'react-error-boundary';
import { FallBack } from './components/FallBack/FallBack';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <ErrorBoundary fallbackRender={FallBack}>
        <Outlet />
      </ErrorBoundary>
    </>
  );
}

export default App;
