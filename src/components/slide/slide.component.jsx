import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProfilePhoto from "../../assets/home/prifile.jpg";

const Slide = (props) => {
    const [slideData, setSlideData] = useState(props.slide);
    // console.log("first", slideData)
    return (
        <div
        className="inner-slide"
        style={{ background: `url('${slideData.image}') no-repeat center center` }}          
        >
            <div className="inner-slide-container">
                <div>
                    <h1>{slideData.title}</h1>
                </div>
                <div>
                    <p>{slideData.description}</p>
                </div>
                <button>{slideData.button}</button>
            </div>
            <section className="inner-slide-profile-container">
                <img src={ProfilePhoto} alt={slideData.user} />
                <span>
                Posted by <strong>{slideData.user}</strong>
                </span>
            </section> 
        </div>
    );
};

export default Slide;
