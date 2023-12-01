import { FC } from 'react';

export const Header: FC = () => {
  return (
    <>
      <header>
        <nav>
          <a href="/">Main</a>
          <a href="/form1">Go to Form1</a>
          <a href="/form2">Go to Form2</a>
        </nav>
      </header>
    </>
  );
};
