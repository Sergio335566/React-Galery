import React from 'react';
import { NavLink } from 'react-router-dom';
import Artist from './views/Artist'

console.log(Artist)
const routes = [
  { to: '/', label: 'Home' },
  { to: '/Artist', label: 'Artist' }
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to} className="navigation" >{label}</NavLink>}
  )

  return <nav>{ links }</nav>;
}

export default Nav
