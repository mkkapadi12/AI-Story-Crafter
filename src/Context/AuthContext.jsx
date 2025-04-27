import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

//for development purpose: http://localhost:5002/api/auth/user
//for deployment purpose: https://ai-story-crafter-server.vercel.app/api/auth/user

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("storytoken") || null
  );
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(""); // Initialize with null to indicate no user initially
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const isLoggedIn = !!token;

  const authorizationToken = `Bearer ${token}`;

  // Store token in Local Storage and update state
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("storytoken", serverToken);
    setToken(serverToken);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      const previewURL = URL.createObjectURL(file);
      // console.log("previewURL :", previewURL);

      setImagePreview(previewURL);
    } else {
      setImage(null);
      setImagePreview(null);
      // Optionally, show an error message
    }
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
      setLoading(true); // Set loading to true while fetching user data
      const res = await axios.get(
        "https://ai-story-crafter-server.vercel.app/api/auth/user",
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const userInfo = res.data;
      setLoading(false); // Set loading to false after fetching user data
      setUser(userInfo.userData); // Update user state
    } catch (error) {
      console.error("Can't fetch user data:", error);
      userLogout(); // Logout if authentication fails
    }
  };

  //update profile function
  const profileUpdate = async (data) => {
    // if (!image) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("image", image);
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    try {
      const res = await axios.patch(
        "https://ai-story-crafter-server.vercel.app/api/auth/update",
        formData, // Pass the data as the request body
        {
          headers: {
            Authorization: authorizationToken, // Include the token in the headers
            "Content-Type": "multipart/form-data", // Set the content type as multipart form data
          },
        }
      );
      const newdata = res.data;
      setImage(null);
      setUser(newdata.user);
      toast.success(res.data.msg);
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
      toast.error("Error Updating Profile");
      throw error; // Propagate the error for further handling
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
        userLogout,
        profileUpdate,
        storeTokenInLS,
        setImagePreview,
        handleImageChange,
        user,
        token,
        loading,
        isLoggedIn,
        imagePreview,
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
