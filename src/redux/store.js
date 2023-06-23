import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './createSlice'; 
import { filterReduser } from './filterSlice';




const reducer = combineReducers({
    contacts: contactsSlice.reducer,
    filter: filterReduser,
});



export const store = configureStore({ reducer });

