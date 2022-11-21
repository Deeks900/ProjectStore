import React from 'react'
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import { combineReducers } from 'redux';
 
const rootReducer = combineReducers({
    authReducer: authReducer,
    profileReducer: profileReducer
})

export default rootReducer