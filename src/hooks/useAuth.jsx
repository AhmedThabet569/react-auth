import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
}

export const AuthProvider = ({children}) => {
    const [currentuser,setCurrentUser] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        // Your authentication logic here
      const useSubscribe =    auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        setLoading(false);
        });
        return useSubscribe;
    },[])
    const value = {currentuser};    
    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    )
}