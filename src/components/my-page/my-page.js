import React, { useEffect, useState } from 'react';
import './my-page.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';

import profileImg from '../../assets/images/2.jpg';

const MyPage = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        // Add the event listener when the component mountsxxxx
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-dark p-md-3 ${isScrolled ? 'active' : ''}`}>
                <div className="container">
                    <h1 className="navbar-brand">Piyush Koshti</h1>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="mx-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div className="banner-image w-100 vh-100 d-flex justify-content-center">
                <div className="content text-center">
                    <img className='profile-img' src={profileImg} alt='profile-img' style={{width: "100px", height: "100px"}}/>
                    <h1 className="profile-content-heading text-white"><span>Hii</span>, I'm Piyush Koshti</h1>
                    <p className="profile-content-details text-white">‟Hello, I'm a Full Stack Developer with expertise in PHP, Vue.js, and React.js. I specialize in designing and developing end-to-end web solutions, from creating responsive user interfaces to building robust server-side logic. With a passion for both front-end and back-end technologies, I bring a versatile skill set to deliver efficient, user-friendly, and innovative web applications.”</p>
                </div>
            </div>
            <div className="container custom-container my-5 d-grid gap-5">
                <div className="profile-page-container row px-5 text-align-center">
                    <div className="col-md-4">
                        <a href='https://github.com/piyush-koshti'>GitHub</a>
                    </div>
                    <div className="col-md-4">
                        <a href='https://www.linkedin.com/in/piyush-koshti-5484a4240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Linkedin</a>
                    </div>
                    <div className="col-md-4">
                        <a href='https://www.instagram.com/piyush.koshti/?igshid=MzNINGNkZWQ4Mg=='>Instagram</a>
                    </div>
                </div>

                <div className="p-5 border">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
                    natus iusto fugit id saepe neque rerum magni laudantium accusantium
                    dolorem numquam quasi.
                    </p>
                </div>
                <div className="p-5 border">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
                    natus iusto fugit id saepe neque rerum magni laudantium accusantium
                    dolorem numquam quasi.
                    </p>
                </div>
                <div className="p-5 border">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
                    natus iusto fugit id saepe neque rerum magni laudantium accusantium
                    dolorem numquam quasi.
                    </p>
                </div>
                <div className="p-5 border">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
                    natus iusto fugit id saepe neque rerum magni laudantium accusantium
                    dolorem numquam quasi.
                    </p>
                </div>
                <div className="p-5 border">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus veniam ipsa earum quibusdam, atque ipsum error maiores
                    natus iusto fugit id saepe neque rerum magni laudantium accusantium
                    dolorem numquam quasi. df
                    </p>
                </div>
                </div>
        </div>
    )
}

export default MyPage;