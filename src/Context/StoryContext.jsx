import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const StoryContext = createContext();

// FOR DEVELOPMENT
// const API = "http://localhost:5002/api/story";

const StoryProvider = ({ children }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStories = async () => {
    //FOR PRODUCTION
    try {
      const response = await axios.get(
        "https://ai-story-crafter-server.vercel.app/api/story"
      );
      // console.log("response", response.data);

      setStories(response.data);
    } catch (err) {
      console.error("Error fetching stories:", err);
      toast.error("Error fetching stories. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <StoryContext.Provider value={{ stories, loading, fetchStories }}>
      {children}
    </StoryContext.Provider>
  );
};

// Custom hook
const useStoryContext = () => {
  return useContext(StoryContext);
};

export { StoryProvider, useStoryContext };
