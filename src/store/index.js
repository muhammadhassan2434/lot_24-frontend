import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; 
import auth from './auth';
import checkTokenMiddleware from './authmiddleware';
import buyerAuthReducer from "./authBuyer";  

const store = configureStore({
    reducer: {
        products: productReducer,
        // auth: auth,
        // buyerAuth: buyerAuthReducer, // Correct key
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(checkTokenMiddleware),
});

export default store;
