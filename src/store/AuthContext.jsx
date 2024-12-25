import { useMutation } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { verifyUser } from "../utils/mutations/productMutation";

// Define the enum for current state
const CurrState = {
  LOGGED_IN: "loggedIn",
  LOGGED_OUT: "loggedOut",
  PENDING: "pending",
};

// Initial state for the context
const initialState = {
  userData: null,
  currState: CurrState.PENDING,
  dispatch: () => {},
};

// Create the context
const AuthContext = createContext(initialState);

// Reducer function to handle state updates
const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
        if(!action?.payload?.token){
            localStorage.removeItem("auth_token")
            return {
                ...state,
                userData: null,
                currState: CurrState.LOGGED_OUT
            }
        }
        // console.log(action.payload.userData)
    localStorage.setItem("auth_token", action.payload.token)
      return {
        ...state,
        userData: action.payload.userData,
        currState: CurrState.LOGGED_IN,
      };
    case "LOGOUT":
      localStorage.removeItem("auth_token")
      return {
        ...state,
        userData: null,
        currState: CurrState.LOGGED_OUT,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Context Provider component
export const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(userReducer, initialState);
  const {mutate, isPending} = useMutation({
    mutationKey: ['verifyuser'],
    mutationFn: verifyUser,
    onSuccess: (data) => {
        if(data?.data){
            const token = localStorage.getItem("auth_token")
            dispatch({type: "LOGIN", payload: {userData: data?.data, token}})
        }
    }, 
    onError: (error) => {
        console.log(error)
        dispatch({type: "LOGOUT"})
    }
  })

  const handleVerifyUser = async (token) => {
    mutate(token)
  }

  useEffect(() => {
      if(state.currState === CurrState.LOGGED_OUT || state.currState === CurrState.PENDING){
          const authToken = localStorage.getItem("auth_token")
          if(authToken){
            handleVerifyUser(authToken)
          }else {
            if(state.currState === CurrState.PENDING){
              dispatch({type: "LOGOUT"})
            }
          }
      }
  }, [])

  // console.log("state: ", state)

  return (
    <AuthContext.Provider value={{ userData:state.userData,currState:state.currState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
