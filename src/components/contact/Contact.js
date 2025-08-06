import React, { useState, useEffect, useRef } from 'react';
import "./Contact.scss"

import { 
    signInWithPhoneNumber,
    getRedirectResult
} from 'firebase/auth';

import { 
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import HomeHeader from "../home-header/home-header.component";
// import axios from 'axios'
// import Swal from 'sweetalert2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import Footer from '../footer/footer.component';

const Contact = () => {
    const [inputFields, setInputFields] = useState({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        company: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
        let errors = {};

        if (!inputValues.fname || inputValues.fname == "") {
            errors.fname = 'First name is required!'
        }
        if (!inputValues.lname || inputValues.lname == "") {
            errors.lname = 'Last name is required!'
        }
        if (!inputValues.phone.match("^[0-9]{10}$")) {
            errors.phone = "Your phone number is not valid!";
        }
        if (!inputValues.email) {
            errors.email = 'Email is required!'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValues.email)) {
            errors.email = 'Invalid email address'
        }
        if (!inputValues.company || inputValues.company == "") {
            errors.company = 'Company name is required!'
        }
        if (!inputValues.message || inputValues.message == "") {
            errors.message = 'Message is required!'
        }
        return errors;
    }
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    }
    const finishSubmit = () => {
        console.log(inputFields);
        // axios.post(`http://127.0.0.1:8000/api/contact`, inputFields).then(({data})=>{
        //     Swal.fire({
        //         icon:"success",
        //         text:data.message
        //     })
        //     setInputFields({
        //         fname: "",
        //         lname: "",
        //         phone: "",
        //         email: "",
        //         company: "",
        //         message: "",
        //     })
        //     navigate("/")
        //     }).catch(({response})=>{
        //     if(response.status===422){
        //         setValidationError(response.data.errors)
        //     }else{
        //         Swal.fire({
        //         text:response.data.message,
        //         icon:"error"
        //         })
        //     }
        // })
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
          finishSubmit();
        }
    }, [errors]);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect();
        console.log({user});
    }

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             console.log('ddddd');
    //             console.log(auth);
    //             const response = await getRedirectResult(auth)
    //             console.log('ccccccc');
    //             console.log(response);
    //             // if response is exist then save into firebase
    //             if(response) {
    //                 const userDocRef = await createUserDocumentFromAuth(response.user)
    //             }
    //         } catch (err) {
    //             console.log('Error occured when fetching books');
    //         }
    //     })();
    // }, [])

    return(
        <>
            <div className='profile-data'>
                <div className="project-header">
                    <HomeHeader />
                </div>
            </div>
            <div className="dashboard-top-title-container bg-none container-field pt-5">
                <div className="container pt-5">
                    <div className='row justify-content-center'>
                        <div className='col-md-10 justify-content-center text-center'>
                            <h1>Get In Touch</h1>
                            <p>Home <FontAwesomeIcon icon={faAnglesRight} /> Contact US</p>
                        </div>
                        <div className='col-md-10 justify-content-center text-center'>
                            <button
                                onClick={logGoogleUser} 
                                className='register m-2 bg-success text-white py-2 px-4'
                            >Sign in with Google Popup</button>
                            <button 
                                onClick={logGoogleRedirectUser} 
                                className='payment m-2 bg-white text-black py-2 px-4'
                            >Sign in with Google Redirect</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-container container-field py-5">
                <div className="container pb-5">
                    <div className='row justify-content-center'>
                        <div className="col-md-10 justify-content-center">
                            <div className="col-12 d-flex card-content">
                                <div className="col-md-5 card-info">
                                    <div className='card-info-content bg-black text-white p-3'>
                                        <div>
                                            <h2>Contact Us</h2>
                                            <p className="mt-4"><FontAwesomeIcon icon={faEnvelope} /> admin@admin.com</p>
                                        </div>
                                        <div className='icons'>
                                            <FontAwesomeIcon className="pe-2" icon={faSquareFacebook} />
                                            <FontAwesomeIcon className="pe-2" icon={faSquareInstagram} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-7 card-form">
                                    <div className='card-form-content bg-white text-black p-3'>
                                        <div className='d-flex justify-content-between my-3'>
                                            <h5>Send A Message</h5>
                                            <p className="m-auto">compulsory field <span className='text-danger'>*</span></p>
                                        </div>
                                        <form className='row' onSubmit={handleSubmit}>
                                            <div className="col-md-6 form-group mt-3">
                                                {/* <label htmlFor="fname">First Name <span className='text-danger'>*</span></label> */}
                                                <input 
                                                    type="text"
                                                    name="fname"
                                                    value={inputFields.fname}
                                                    onChange={handleChange}
                                                    className="form-control" 
                                                    id="fname" 
                                                    placeholder="Enter first name"
                                                />
                                                {errors.fname ? (
                                                <p className="error text-danger">
                                                    {errors.fname}
                                                </p>
                                                ) : null}
                                            </div>
                                            <div className="col-md-6 form-group mt-3">
                                                {/* <label htmlFor="lname">Last Name <span className='text-danger'>*</span></label> */}
                                                <input 
                                                    type="text"
                                                    name="lname"
                                                    value={inputFields.lname}
                                                    onChange={handleChange}
                                                    className="form-control" 
                                                    id="lname" 
                                                    placeholder="Enter last name"
                                                />
                                                {errors.lname ? (
                                                <p className="error text-danger">
                                                    {errors.lname}
                                                </p>
                                                ) : null}
                                            </div>
                                            <div className="col-md-6 form-group mt-3">
                                                {/* <label htmlFor="phone">Phone Number <span className='text-danger'>*</span></label> */}
                                                <input 
                                                    type="text"
                                                    name="phone"
                                                    value={inputFields.phone}
                                                    onChange={handleChange}
                                                    className="form-control" 
                                                    id="phone" 
                                                    placeholder="Enter phone"
                                                />
                                                {errors.phone ? (
                                                <p className="error text-danger">
                                                    {errors.phone}
                                                </p>
                                                ) : null}
                                            </div>
                                            <div className="col-md-6 form-group mt-3">
                                                {/* <label htmlFor="email">Email address <span className='text-danger'>*</span></label> */}
                                                <input 
                                                    type="text"
                                                    name="email"
                                                    value={inputFields.email}
                                                    onChange={handleChange}
                                                    className="form-control" 
                                                    id="email" 
                                                    placeholder="Enter email"
                                                />
                                                {errors.email ? (
                                                <p className="error text-danger">
                                                    {errors.email}
                                                </p>
                                                ) : null}
                                            </div>
                                            <div className="col-md-12 form-group mt-3">
                                                {/* <label htmlFor="company">Company Name <span className='text-danger'>*</span></label> */}
                                                <input 
                                                    type="text"
                                                    name="company"
                                                    value={inputFields.company}
                                                    onChange={handleChange}
                                                    className="form-control" 
                                                    id="company" 
                                                    placeholder="Enter company"
                                                />
                                                {errors.company ? (
                                                <p className="error text-danger">
                                                    {errors.company}
                                                </p>
                                                ) : null}
                                            </div>
                                            <div className="col-md-12 form-group mt-3">
                                                {/* <label htmlFor="message">Message <span className='text-danger'>*</span></label> */}
                                                <textarea 
                                                    cols={5}
                                                    rows={4}
                                                    type="text"
                                                    name="message"
                                                    value={inputFields.message}
                                                    onChange={handleChange}
                                                    className="form-control" 
                                                    id="message" 
                                                    placeholder="Enter message"
                                                ></textarea>
                                                {errors.message ? (
                                                <p className="error text-danger">
                                                    {errors.message}
                                                </p>
                                                ) : null}
                                            </div>
                                            <div className='col-md-12 form-group mt-3'>
                                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dashboard-title-container'>
                <div className="dashboard-bottom container-field py-5">
                    <div className="container py-5">
                        <div className='row justify-content-center'>
                            <div className='col-md-10 justify-content-center text-center'>
                                <h1>Try It Today!</h1>
                                <p>Home Contact US Home Contact US</p>
                                <div className=''>
                                    <button className='register m-2 bg-success text-white py-2 px-4'>Link To Register</button>
                                    <button className='payment m-2 bg-white text-black py-2 px-4'>Payment And Precing</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact