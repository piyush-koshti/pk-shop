import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Slide from "../slide/slide.component"
import HomeHeader from "../home-header/home-header.component";
/* Example assuming you're using CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './react-slider.component.scss';
import ProfileData from '../profile-data/profile-data.component';

import leptopImg from "./../../assets/home/leptop.jpg"
import teamImg from "./../../assets/home/team.jpg"
import deskImg from "./../../assets/home/desk.jpg"

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

const ReactSlider = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 1000,
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: false,
    //     autoplaySpeed: 8000,
    //     slidesToScroll: 1,
    // };
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        // Delay the text animation for a short duration after the Slider mounts
        const timeout = setTimeout(() => {
        setShowText(true);
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    const slideData = [
        {
            id: 1,
            title: "Full Stack Developer",
            description:
                "‟Hello, I'm a Full Stack Developer with expertise in PHP, Vue.js, and React.js. I specialize in designing and developing end-to-end web solutions, from creating responsive user interfaces to building robust server-side logic. With a passion for both front-end and back-end technologies, I bring a versatile skill set to deliver efficient, user-friendly, and innovative web applications.”",
            button: "Read More",
            image: leptopImg,
            user: "Piyush Koshti",
        },
        {
            id: 2,
            title: "PHP Laravel Devloper",
            description:
                "‟A passionate PHP Laravel developer with 2.5 years of experience in designing, developing, and maintaining web applications. Proficient in leveraging Laravel's robust features to create efficient and scalable solutions. Strong problem-solving skills and a commitment to delivering high-quality code.”",
            button: "Read More",
            image: teamImg,
            user: "Piyush Koshti",
        },
        {
            id: 3,
            title: "Vue.js and React.js Frontend Devloper",
            description:
                "‟Dedicated Front-end Developer with a focus on Vue.js and React.js, proficient in crafting engaging and responsive user interfaces. [Number of years] years of experience in front-end development, leveraging the power of Vue.js and React.js to build efficient and dynamic web applications.”",
            button: "Read More",
            image: deskImg,
            user: "Piyush Koshti",
        },
    ];
    const settings = {
        autoplay: true,
        infinite: true,
        speed: 800,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        // Add any other settings you need
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

  return (
    <div className="modern-slider">
        <div className="slider-container">
            <HomeHeader />
            <Slider {...settings}>
                {/* Map through your slide data */}
                {slideData.map((slide, index) => (
                    <div key={index}>
                        <Slide slide={slide}/>
                    </div>
                ))}
            </Slider>
        </div>
        <ProfileData />
    </div>
  );
};

export default ReactSlider;
