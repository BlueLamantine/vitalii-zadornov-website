import { React, useState } from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
const Menu = () => {
  const [closeAction, setCloseAction] = useState(false);

  const handleCloseMenu = () => setCloseAction(!closeAction);

  return (
    <div className="menu">
      <nav className="navbar-default">
        <ul className={closeAction ? 'navbar active' : 'navbar'}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="nav-link-active"
              onClick={handleCloseMenu}
            >
              Главная
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink
              exact
              to="/gallery"
              className="nav-link"
              activeClassName="nav-link-active"
              onClick={handleCloseMenu}
            >
              Галерея
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink
              exact
              to="/blog"
              className="nav-link"
              activeClassName="nav-link-active"
              onClick={handleCloseMenu}
            >
              Блог
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink
              exact
              to="contact"
              className="nav-link"
              activeClassName="nav-link-active"
              onClick={handleCloseMenu}
            >
              Контакты
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleCloseMenu}>
          <i className={closeAction ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
