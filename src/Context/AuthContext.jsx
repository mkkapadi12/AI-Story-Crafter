import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("storytoken") || null
  );
  const [user, setUser] = useState(""); // Initialize with null to indicate no user initially
  const isLoggedIn = !!token;

  const authorizationToken = `Bearer ${token}`;

  // Store token in Local Storage and update state
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("storytoken", serverToken);
    setToken(serverToken);
  };

  // Logout function
  const userLogout = () => {
    localStorage.removeItem("storytoken");
    setToken(null);
    if (token == null) {
      toast.success("Logout Successfully");
    }
    setUser(""); // Clear the user data on logout
  };

  const userAuthentication = async () => {
    if (!token) return; // Skip if no token is available
    try {
      const res = await axios.get("http://localhost:5002/api/auth/user", {
        headers: {
          Authorization: authorizationToken,
        },
      });
      const userInfo = res.data;
      setUser(userInfo.userData); // Update user state
    } catch (error) {
      console.error("Can't fetch user data:", error);
      userLogout(); // Logout if authentication fails
    }
  };

  // Effect to fetch user data whenever the token changes
  useEffect(() => {
    if (token) {
      userAuthentication();
    }
  }, [token]);

  // Effect to sync token with localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("storytoken");
    setToken(storedToken);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        userLogout,
        token,
        user,
        isLoggedIn,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth Context
const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext, AuthProvider };
