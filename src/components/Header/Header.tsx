import { FC } from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <>
      <header className={style.header}>
        <div className="wrapper">
          <nav className={style.nav}>
            <NavLink
              to="/main"
              className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.notActive}`
              }
            >
              Main
            </NavLink>
            <NavLink
              to="/form1"
              className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.notActive}`
              }
            >
              Go to Form1
            </NavLink>
            <NavLink
              to="/form2"
              className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.notActive}`
              }
            >
              Go to Form2
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};
