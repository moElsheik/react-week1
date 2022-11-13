import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  return (
    <div>
    <nav className="  navbar p-3 position-fixed top-0 w-100">
        <div className="container d-flex justify-content-between align-items-baseline">
            <a className=" text-white text-decoration-none text-uppercase fs-3 fw-bolder " href="#">START REACT</a>
            <div className=' navList'>
                <ul className=" d-flex list-unstyled">
                    <li><Link className=" text-white text-decoration-none text-uppercase m-3 fw-bolder" to="">home</Link></li>
                    <li><Link className=" text-white text-decoration-none text-uppercase m-3 fw-bolder" to="portfolio">portfolio</Link></li>
                    <li><Link className=" text-white text-decoration-none text-uppercase m-3 fw-bolder" to="about">about</Link></li>
                    <li><Link className=" text-white text-decoration-none text-uppercase m-3 fw-bolder" to="contact">contact</Link></li>
                    
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}
