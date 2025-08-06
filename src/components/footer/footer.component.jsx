import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './footer.component.scss';
import Logo from './../../assets/home/footer-logo.png'

const Footer = () => {
    return(
        <div className="pg-footer">
            <footer className="footer">
                <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                </svg>
                <div className="container">
                    <div className="footer-cta pt-5 p-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-3">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>Kankaria Lake, Ahmedabad</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-3">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <a href="tel:+916353108476"><span>+91 6353108476</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-3">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <a href="mailto:piyushkoshti2001@gmail.com"><span>piyushkoshti2001@gmail.com</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-5">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html"><img src={Logo} className="img-fluid" alt="logo"/></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>Feel free to adjust it based on your preferences or specific website requirements!<br />
                                        "Explore | Connect | Engage - <a href="https://piyush-koshti.web.app/"><span>piyush-koshti.web.app</span></a> | All rights reserved. Designed & Coded by piyush koshti | Privacy Policy | Terms of Use"</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="https://www.facebook.com/prince.koshti.121" target="_blank"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-twitter twitter-bg"></i></a>
                                        <a href="mailto:piyushkoshti2001@gmail.com" target="_blank"><i className="fab fa-google-plus-g google-bg"></i></a>
                                        <a href="https://www.instagram.com/piyush.koshti/?igshid=MzNINGNkZWQ4Mg" target="_blank"><i className="fab fa-instagram instagram-bg"></i></a>
                                        <a href="https://www.linkedin.com/in/piyush-koshti-5484a4240/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="fab fa-linkedin-in linkedin-bg"></i></a>
                                        <a href="https://github.com/piyush-koshti" target="_blank"><i className="fab fa-github github-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-3">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="https://pk-qr-code-2001.web.app/" target='_blanck'>QR Code Generator</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">services</a></li>
                                        <li><a href="#">portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Expert Team</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="footer-widget pb-5">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i className="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Sign up</h3>
                                    </div>
                                    <div className="sign-up-form mt-5">
                                        <button className='sign-up-button'>
                                            <NavLink to="/auth">
                                                <p className='p-0 my-auto text-start'>Sign up for a Gmail account</p> 
                                                <span>
                                                    <i className="fab fa-telegram-plane"></i>
                                                </span>
                                            </NavLink>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-5">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2023 piyuscoder. All rights reserved. | Designed and developed with ❤️ by <a href="/">piyush koshti</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>        
    )
}

export default Footer