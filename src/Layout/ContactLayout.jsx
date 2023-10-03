import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function ContactLayout() {
  return (
    <div>
                 <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo hic, nulla minus non itaque libero eligendi laboriosam repudiandae ea in dolorem! Possimus voluptatibus mollitia perferendis facilis placeat repellendus non vero, illum sed ipsa ratione inventore ea iusto, at nobis dolore, corporis omnis modi? Quis, quae. Perferendis natus voluptate tempora sequi quidem reiciendis. Eius, nihil.</p>
    <nav>
        <NavLink to='faq'>FAQ</NavLink>
        <NavLink to='form'>Form</NavLink>
    </nav>
    <Outlet/>
    </div>
  )
}

export default ContactLayout