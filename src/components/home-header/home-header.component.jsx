import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from "react-router-dom";
import piyushCoder from './../../assets/home/piyushCoder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from './../../contexts/user.context'
import { signOutUser } from "./../../utils/firebase/firebase.utils"

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

import "./home-header.component.scss";

const NavBar = () => {
  // const { currentUser, setCurrentUser } = useContext(UserContext)
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext);

  // console.log('header',currentUser)
  const [click, setClick] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  // const signOutHandler = async () => {
  //   await signOutUser()
  //   setCurrentUser(null)
  // }
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the scroll threshold as needed
      const scrollThreshold = 300;

      setIsSticky(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={click ? 'main-container' : ''} onClick={closeMenu} />
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div className="nav-logo">
            <a href="/">
              <img src={piyushCoder} alt='' width={150} height={80}/>
            </a>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink className="nav-links" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" to="/ecom">Ecom</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-links" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" to="/contact-us">Contact Us</NavLink>
            </li> */}
            {
              currentUser ? (
                <li className="nav-item">
                  <span className='nav-links' onClick={signOutUser}>Sign Out</span>
                </li>    
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-links" to="/auth">Sign In</NavLink>
                </li>
              )
            }
          </ul>
          <CartIcon />
          <div className="nav-icon" onClick={handleClick}>
            {click ?
              <FontAwesomeIcon icon={faTimes} /> : 
              <FontAwesomeIcon icon={faBars} />
            }
          </div>
          { isCartOpen && <CartDropdown /> }
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
