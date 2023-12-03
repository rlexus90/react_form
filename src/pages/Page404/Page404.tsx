import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Page404: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
      clearTimeout(timer);
    }, 3000);
  });

  return (
    <>
      <h1>Oh! Page not found</h1>
    </>
  );
};
