import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const StoryContext = createContext();

// FOR DEVELOPMENT
// const API = "http://localhost:5002/api/story";

const StoryProvider = ({ children }) => {
  const [stories, setStories] = useState([]);
  const [story, setStory] = useState(null);
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

  //GET SINGLE STORY
  const fetchSingleStory = async (id) => {
    // console.log("ID", id);

    try {
      const response = await axios.get(`https://ai-story-crafter-server.vercel.app/api/story/${id}`);
      setStory(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching Story:", error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <StoryContext.Provider
      value={{ stories, loading, fetchStories, fetchSingleStory, story }}
    >
      {children}
    </StoryContext.Provider>
  );
};

// Custom hook
const useStoryContext = () => {
  return useContext(StoryContext);
};

export { StoryProvider, useStoryContext };
