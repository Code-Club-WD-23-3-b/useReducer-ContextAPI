import React, { useReducer, createContext } from 'react';


const initialState = {
    name: '',
    email: '',
    age: 0
}

// action: {type: "", field: ""?, value: ""?, data?}
const userReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            // {... state, state["age"]: 100}
            return { ...state, [action.field]: action.value }; // Returned den veränderten State
        case 'RESET_FIELDS':
            return initialState;
        case 'PRELOAD_DATA':
            // "...state" braucht man bei dieser kleinen applikation nicht
            return { ...state, ...action.data };
        default:
            return state
    }
}

const MyUserContext = createContext();

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <MyUserContext.Provider value={{ state, dispatch }}>
            {children}
        </MyUserContext.Provider>
    );
};
export default MyUserContext