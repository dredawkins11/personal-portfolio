import React from 'react';
import "../styles/Header.scss"

const Header = () =>{
    return (
        <header>
                <a className='nav-logo' href="#">dre dawkins</a>
            <nav>
                <a href="#">projects</a>
                <a href="#">about</a>
                <a href="#">contact</a>
            </nav>
        </header>
    )
}
export default Header