import React from 'react';
import "./home.scss"
import logo from '../../logo.svg';
import ReactSlider from './../react-slider/react-slider.component';
import Footer from '../footer/footer.component';

const Home = () => {
    return (
        <div className="App">
           <ReactSlider />
           <Footer />
        </div>
    )
}
export default Home;