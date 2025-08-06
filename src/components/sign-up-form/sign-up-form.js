import React, { useState } from "react";
// import React, { useState, useContext } from "react";

import "./sign-up-form.scss"

import FormInput from "./../form-input/form-input.component"
import Button from "./../button/button"

// import { UserContext } from "./../../contexts/user.context" same as sign-in-form.js, not needed as we are using auth listener to set current user
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "./../../utils/firebase/firebase.utils"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;
    
    // for we are use sign in and set into the context using auth listener
    // const { setCurrentUser } = useContext(UserContext) not needed as we are using auth listener to set current user
    // console.log('hit');

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("password do not match")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            console.log('user', user);

            // setCurrentUser(user); not needed as we are using auth listener to set current user

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log("user creation encountered an error: ", error);
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
                <h4>Don't have an account?</h4>
                <span>Sign up with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        label="Display Name"
                        type="text"
                        required
                        onChange={handleChange}
                        name="displayName"
                        value={displayName}
                    />
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
                    <FormInput 
                        label="Confirm Password"
                        type="password"
                        required
                        onChange={handleChange}
                        name="confirmPassword"
                        value={confirmPassword}
                    />
                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
        </>
    )
}

export default SignUpForm