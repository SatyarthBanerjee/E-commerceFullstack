import React, { createContext, useContext, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate()  
  const [user, setUser] = useState(null); 
  const [yeslogin, setyeslogin] = useState(false); 
  const login = useCallback(async (credentials) => {
    try {
      const res = await axios.post("http://localhost/Server/createuser.php",credentials);
      const data = res?.data;
      console.log(data.response);
      if (data?.success===false) {
        setUser(data.user); // Assuming your server sends user data on successful login
        setyeslogin(true);
        alert("User Exists")
        return true;
      } 
      else if(data?.success){
        alert("Created successfully")
        console.log("Created successfully");
        return false;
      }
      else{
        console.log("Error occured");
      }
    } catch (error) {
      console.log("Error during login:", error);
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    // Implement logout logic if needed
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, yeslogin,setyeslogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
