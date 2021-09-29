// Third
import React, { FC } from 'react'
// Styles
import { Navbar } from '../styles/Navbar'
// Images
import search from '../media/search.svg'
import menu from '../media/menu.svg'
import shopping from '../media/shopping-cart.svg'

export const Header: FC = () => {
    return (
        <Navbar>
            <nav className="navbar fixed-top">
                {/* Other name Frankly */}
                <a href="/" className="business-logo">Inbetween Days</a>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Shop</li>
                </ul>
                <div className="header-logos">
                    <img className="search" src={search} alt="search bar" />
                    <img className="shopping-cart" src={shopping} alt="shopping cart" />
                    <img className="menu" src={menu} alt="menu options" />
                </div>
            </nav>
        </Navbar>
    )
}