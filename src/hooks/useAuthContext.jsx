import { useContext } from 'react';
import AuthContext from '../store/AuthContext';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a UserProvider");
  }
  return context;
};