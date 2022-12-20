import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src='images/Tradelogonotext.png' alt='' />
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item' id='home-btn'>
                            <div to="/" className="nav-links" onClick={closeMobileMenu}>
                                home
                            </div>
                        </li>
                        <li className='nav-item' id='services-btn'>
                            <div to="/" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </div>
                        </li>
                        <li className='nav-item' id='contact-btn' >
                            <div to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </div>
                        </li>

                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>Contact</Button>} */}
                </div>
            </nav>
        </>
    );
}

export default Navbar;