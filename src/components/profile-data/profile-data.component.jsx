import React, { useState, useEffect } from 'react';
/* Example assuming you're using CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './profile-data.component.scss';
import ProjectsSlider from '../projects-slider/projects-slider.component';

function ProfileData() {
  return (
    <div className="profile-data">
        <div className="container custom-container d-grid gap-3">
            <div className="py-1 row text-align-center">
                <div className="d-flex col-md-12  justify-content-center">
                    <h2>Profile Details</h2>
                </div>
            </div>
            <div className="profile-page-container row text-align-center">
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
        </div>
        <div className="container custom-container d-grid gap-3 py-4">
            <div className="pt-1 row text-align-center">
                <div className="d-flex col-md-12  justify-content-center">
                    <h2>Projects</h2>
                </div>
            </div>
        </div>
        <ProjectsSlider />
    </div>
  );
};

export default ProfileData;
