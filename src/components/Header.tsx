// Third
import React, { FC } from 'react'
// Images
import search from '../media/search.svg'

export const Header: FC = () => {
    return (
        <header>
            <nav className="navbar fixed-top">
                <div className="business-logo">
                    <img src="" alt="" />
                    <a href="#"></a>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Shop</li>
                </ul>
                <div className="header-logos">
                    <img src={search} alt="" />
                    <img src="/shopping-cart.svg" alt="" />
                    <img src="/menu.svg" alt="" />
                </div>
            </nav>
        </header>
    )
}