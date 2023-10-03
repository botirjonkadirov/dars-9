import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'
function Layout() {
  return (
    <>
    <header>
    <nav>
      <h1>My articles</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/articles">Articles</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    <BreadCrumbs/>
    </header>
    <main><Outlet/></main>
    <footer></footer>
    </>
  )
}

export default Layout