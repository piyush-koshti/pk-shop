import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
/* Example assuming you're using CSS */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './projects-slider.component.scss';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className='nextButton'
        onClick={onClick}
      ><i className="fa-solid fa-arrow-right"></i></button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
        className='previousButton'
        onClick={onClick}
        ><i className="fa-solid fa-arrow-left"></i></button>
    );
}

const ProjectsSlider = () => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        infinite: true,
        speed: 800,
        autoplaySpeed: 8000,
        pauseOnHover: false,
        dots: false,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        // Add any other settings you need
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                },
            },
        ],
    };

  return (
    <div className="projects-slider container row m-auto">
        <div className='col-12 pb-5'>
            <Slider className='col-12' {...settings}>
                {/* Your slide content goes here */}
                <div className="card">
                    <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image">
                            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="" className="card-img"/>
                        </div>
                    </div>

                    <div className="card-content">
                        <p className="name">Clinic Booking Management System</p>
                        <p className="description"><b>Duration:</b> working with last one year.</p>
                        <p className="description"><b>Technology:</b> Laravel + ReactJs + VueJs</p>
                        <p className='mb-3'>Implemented a multifaceted system encompassing various user roles, driving diverse functionalities.</p>  
                        <a href="/projects/1"><button className="button">View More</button></a>
                    </div>
                </div>
                <div className="card">
                    <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="" className="card-img"/>
                        </div>
                    </div>

                    <div className="card-content">
                        <p className="name">E-Commerce Project</p>
                        <p className="description"><b>Duration:</b> 6 months.</p>
                        <p className="description"><b>Technology:</b> Laravel + Codeigniter + VueJs</p>
                        <p className='mb-3'>Full Calendar with Multiple Views: Monthly, Weekly, Daily Views: Use a JavaScript library like FullCalendar.js to create a calendar.</p>  
                        <a href="/projects/2"><button className="button">View More</button></a>
                    </div>
                </div>
                <div className="card">
                    <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="" className="card-img"/>
                        </div>
                    </div>

                    <div className="card-content">
                        <p className="name">E-Commerce Project Cone Cosmetics</p>
                        <p className="description"><b>Duration:</b> one year.</p>
                        <p className="description"><b>Technology:</b> Laravel + Shopware + Symfony + VueJs</p>
                        <p className='mb-3'>Dynamic Product Pricing by Country: Implement a mechanism to detect and capture the user's country code.</p>  
                        <a href="/projects/3"><button className="button">View More</button></a>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  );
};

export default ProjectsSlider;
