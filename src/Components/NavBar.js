import React from 'react'
import './Styles/NavBar.css'

export default function NavBar() {
  return (
    <>
        <nav>
            <div className="logo">myGoal</div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </>
  )
}
