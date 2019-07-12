import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'Home' },
  { to: '/Artist1', label: 'Artist1' },
  { to: '/Artist2', label: 'Artist2' },
  { to: '/Artist3', label: 'Artist3' },
  { to: '/Artist4', label: 'Artist4' },
  { to: '/Artist5', label: 'Artist5' }
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to} className="navigation" >{label}</NavLink>}
  )

  return <nav>{ links }</nav>;
}

export default Nav
