import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import starbucksLogo from '../../assets/images/starbucks-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'



export default function NavBar() {
    return (
        <div className='navbar-container'>
            <div className='navbar-left'>
                <div className='navbar-quicklinks'>

                    <div>
                        <NavLink
                            to='/'
                            exact={true}
                            id='sb-logo'>
                            <img src={starbucksLogo} alt='coffee-mermaid-brand' className='nav-bar-logo' />
                        </NavLink>
                    </div>
                    <ul>
                        <li className='sb-globalNav_desktopListItem'>
                            <NavLink
                                className='nav-links'
                                to='/menu'
                                exact={true}
                                id='navbar-menu-link'
                                onClick={() => console.log('menu')}
                            >MENU</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className='nav-links'
                                to='/rewards'
                                exact={true}
                                id='navbar-rewards-link'
                                onClick={() => console.log('menu')}
                            >Rewards</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className='nav-links'
                                to='/gift'
                                exact={true}
                                id='navbar-gift-link'
                                onClick={() => console.log('menu')}
                            >Gift Cards</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='navbar-right'>
                <ul>
                    <li>
                        <div className='nav-bar-right-link'>
                            <div className='locator-container nav-links'>
                                <FontAwesomeIcon icon={faLocationDot} className='location-pin' />
                                <NavLink
                                    to='/store-locator'
                                    className='store-locator-link nav-bar-right-link'
                                >Find a store</NavLink>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='nav-button-container'>
                            <button className='button-nav button-nav-sign-in'>Sign in</button>
                        </div>
                    </li>
                    <li>
                        <div className='nav-button-container'>
                            <button className='button-nav join-now-button'>Join Now</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
