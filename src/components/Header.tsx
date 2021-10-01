// Third
import React, { FC, useState } from 'react'
// Styles
import { Navbar } from '../styles/Navbar'
// Images
import search from '../media/search.svg'
import menu from '../media/menu.svg'
import shopping from '../media/shopping-cart.svg'

export const Header: FC = () => {

    const [active, setActive] = useState(false);

    const menuClick = () => {
        setActive(!active);

        const hamburger = document.querySelector<HTMLInputElement>(".menu")!;
        const navMenu = document.querySelector<HTMLInputElement>(".nav-menu")!;

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const linkClick = () => {
        const hamburger = document.querySelector<HTMLInputElement>(".menuw")!;
        const navMenu = document.querySelector<HTMLInputElement>(".nav-menu")!;

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    return (
        <Navbar>
            <nav className="navbar fixed-top">
                {/* Other name Frankly */}
                <a href="/" className="business-logo">Inbetween Days</a>
                <ul className="nav-menu">
                    <li><a href="/" onClick={linkClick}>Home</a></li>
                    <li><a href="/" onClick={linkClick}>Blog</a></li>
                    <li><a href="/" onClick={linkClick}>Shop</a></li>
                </ul>
                <div className="header-logos">
                    <img className="search" src={search} alt="search bar" />
                    <img className="shopping-cart" src={shopping} alt="shopping cart" />
                    <img className="menu" src={menu} alt="menu options" onClick={menuClick} />
                </div>
            </nav>
        </Navbar>
    )
}