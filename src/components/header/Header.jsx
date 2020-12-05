import React from 'react';
import { Link, useRouteMatch} from "react-router-dom";
import classNames from 'classnames';

import './Header.css';

const CustomLink = ({ label, to, exact }) => {
  const match = useRouteMatch({
    path: to,
    exact,
  });

  const linkClass = classNames('menu_btn', { active: match });

  return (
    <Link to={to} className={linkClass}>
      <span>{label}</span>
    </Link>
  );
};

const Header = () => (
  <div className="header_container">
    <div className="header_content">
      <div>
        <span className="header_title">Portfoli</span>
        <span className="header_title_o">o</span>
      </div>
      <div className="header_link_content">
        <CustomLink to="/" label="Home" exact/>
        <CustomLink to="/contacts" label="Contacts" />       
      </div>
    </div>
  </div>
);

export default Header;
