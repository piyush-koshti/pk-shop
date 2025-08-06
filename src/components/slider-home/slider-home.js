import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './slider-home.scss'; // Import your CSS file if needed
import Banner1 from '../../assets/images/banner1.jpg';
import Banner2 from '../../assets/images/banner2.jpg';
import Banner3 from '../../assets/images/banner3.jpg';

const SliderHome = () => {
  return (
    <div className="">
       <header>
          <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
              <div className="container">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#">Franco</a>
                  </div>

                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                      <ul className="nav navbar-nav navbar-right">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">portfolio</a></li>
                          <li><a href="#">services</a></li>
                          <li><a href="#">contact</a></li>
                      </ul>
                  </div>
              </div>
          </nav>


          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner" role="listbox">
                  <div className="item active">
                      <div className="banner banner1"></div>
                      <div className="carousel-caption">
                          <h2 className="animated title">We Are <span>Creative</span></h2>
                          <h3 className="animated agency">Web Design and Development Agency</h3>
                          <p className="animated contact-us"><a href="#">Contact us</a></p>
                      </div>
                  </div>
                  <div className="item">
                      <div className="banner banner2"></div>
                      <div className="carousel-caption">
                          <h2 className="animated title">We Are <span>Franco</span></h2>
                          <h3 className="animated agency">Web Design and Development Agency</h3>
                          <p className="animated contact-us"><a href="#">Contact us</a></p>
                      </div>
                  </div>
                  <div className="item">
                      <div className="banner banner3"></div>
                      <div className="carousel-caption">
                          <h2 className="animated title">We Are <span>Diligent</span></h2>
                          <h3 className="animated agency">Web Design and Development Agency</h3>
                          <p className="animated contact-us"><a href="#">Contact us</a></p>
                      </div>
                  </div>

              </div>

              <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>

      </header>
    </div>
  );
};

export default SliderHome;
