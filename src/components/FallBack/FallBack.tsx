import { FC, useEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';

export const FallBack: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      resetErrorBoundary();
      clearTimeout(timer);
    }, 4000);
  }, []);

  return (
    <>
      <div className="wrapper">
        <h1>Somesing went wrong!</h1>
        <p>{error.message}</p>
      </div>
    </>
  );
};
