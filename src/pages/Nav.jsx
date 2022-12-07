import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss'

const Nav = () =>{
    return (
        <nav className='nav-container'>
            <Link to={"/"}>Home</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
        </nav>
    )
}
export default Nav