import { React, createContext, useState, useEffect, useReducer } from "react";

import { 
    onAuthStateChangedListener,
    createUserDocumentFromAuth
} from '../utils/firebase/firebase.utils.js';

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {
    const { type, payload } = action;
    // console.log('payload', payload);

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null,
}

export const UserProvider = ({ children }) => {
    // const [ currentUser, setCurrentUser ] = useState(null);
    // const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    // const { currentUser } = state;

    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    // console.log('my currentUser', currentUser);

    const setCurrentUser = (user) => {
        dispatch({
            type: USER_ACTION_TYPES.SET_CURRENT_USER,
            payload: user,
        })
    }
    const value = { currentUser, setCurrentUser };

    // signOutUser()
    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener((user) => {
            // console.log('aaa',user);
    //         // when user is exist then createUserDocumentFromAuth
            if(user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })

        return unsubcribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}