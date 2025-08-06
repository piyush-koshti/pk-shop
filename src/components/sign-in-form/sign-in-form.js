import React, { useState } from "react";
// import React, { useState, useContext } from "react";
import "./sign-in-form.scss"

import FormInput from "../form-input/form-input.component"

// import { UserContext } from "./../../contexts/user.context" also not needed as we are using auth listener to set current user

import {
    // createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils"    
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    // for we are use sign in and set into the context using auth listener
    // const { setCurrentUser } = useContext(UserContext) not needed as we are using auth listener to set current user

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // create auth in user context/
        
        // const { user } = await signInWithGooglePopup();
        // setCurrentUser(user) remove this line as we are using auth listener to set current user
        // createUserDocumentFromAuth(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            // setCurrentUser(user); remove this line as we are using auth listener to set current user
            resetFormFields();
        } catch(error) {
            // error handling with the swich case
            switch(error.code) {
                case 'auth/wrong-password': 
                    alert('incorrect password for email')
                    break
                case 'auth/user-not-found':
                    alert('no user associated with the email')
                    break
                case 'auth/invalid-credential':
                    alert('no user associated with the email')
                    break
                default:
                    console.log("error: ", error)
            }
        }
    }
    // console.log(formFields)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <>
            <div className="sign-up-container mx-auto my-4">
                <h4>Already have an account?</h4>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        label="Email"
                        type="email"
                        required
                        onChange={handleChange}
                        name="email"
                        value={email}
                    />
                    <FormInput 
                        label="Password"
                        type="password"
                        required
                        onChange={handleChange}
                        name="password"
                        value={password}
                    />
                    <div className="buttons-container">
                        <Button type="submit">Sign In</Button>
                        <Button 
                            type="button" 
                            buttonType={ BUTTON_TYPE_CLASSES.google } 
                            onClick={signInWithGoogle}
                        >
                            Google sign in
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignInForm