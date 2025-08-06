import React from "react";
import './authentication.scss'

import SignUpForm from "./../sign-up-form/sign-up-form";
import SignInForm from "../sign-in-form/sign-in-form";
import HomeHeader from "../home-header/home-header.component";
import Footer from '../footer/footer.component';

const Authentication = () => {
    return (
        <>
            {/* <div className='profile-data'>
                <div className="project-header">
                    <HomeHeader />
                </div>
            </div> */}
            <div className="row mx-auto py-5">
                <SignInForm />
                <SignUpForm />
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Authentication