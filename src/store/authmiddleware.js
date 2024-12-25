// src/middleware/checkTokenMiddleware.js

const checkTokenMiddleware = (store) => (next) => (action) => {
    // Actions to check for token
    const token = localStorage.getItem("auth_token");
  
    if (!token && action.type === "auth/checkToken") {
      console.warn("No token found in localStorage!");
      // Dispatch a logout action or redirect to login page
      store.dispatch({ type: "auth/logout" });
    }
  
    // Continue to the next middleware or reducer
    return next(action);
  };
  
  export default checkTokenMiddleware;
  