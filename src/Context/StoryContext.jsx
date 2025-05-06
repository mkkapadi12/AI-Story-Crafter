import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "./AuthContext";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import Base64 from "base64-js";
import MarkdownIt from "markdown-it";
import { themes } from "@/helpers/StoryTheme";
import { Navigate } from "react-router-dom";

const StoryContext = createContext();
const API_KEY = process.env.GEMINI_API_KEY;
const API_BASE = import.meta.env.VITE_API;

const StoryProvider = ({ children }) => {
  const { user, authorizationToken, token } = useAuthContext();
  const [stories, setStories] = useState([]);
  const [privateStories, setPrivateStories] = useState([]);
  const [story, setStory] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("anime");
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    story: "",
    user,
  });

  //HANDLE IMAGE CHANGE
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

  //GENERATE STORY
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent generating if neither image nor prompt is provided
    if (!prompt.trim() && !image) {
      setOutput(
        "<p class='text-red-500 font-medium text-center my-4'>Please provide an image or a story description to generate a story.</p>"
      );
      return;
    }
    setLoading(true);

    try {
      let imageBase64 = "";
      if (image) {
        imageBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsArrayBuffer(image);
          reader.onload = () => {
            resolve(Base64.fromByteArray(new Uint8Array(reader.result)));
          };
          reader.onerror = reject;
        });
      }

      const contents = [
        {
          role: "user",
          parts: [
            ...(image
              ? [
                  {
                    inline_data: { mime_type: "image/jpeg", data: imageBase64 },
                  },
                ]
              : []),
            {
              text: `Create a story based on the image and the following prompt. The story should be imaginative, engaging, and related to the theme and must add icons and emoji. In the last of story give moral of the story in blod.In starting of the story give also title in bold.\n\n${prompt} remember to use the theme ${selectedTheme}.\n\n And give space between title, story and moral\n\n. Remember one most thing in answer do not write any thing of like this : "Here's a story based on your prompt" and do not write any note just write story.`,
            },
          ],
        },
      ];

      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash", // or gemini-1.5-pro
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
          },
        ],
      });

      const result = await model.generateContentStream({ contents });

      let buffer = [];
      let md = new MarkdownIt();
      for await (const response of result.stream) {
        buffer.push(response.text());
        setOutput(md.render(buffer.join("")));
        setData((prev) => ({ ...prev, story: md.render(buffer.join("")) }));
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      setOutput((prevOutput) => prevOutput + "<hr>" + error);
    }
  };

  //POST STORY IN PUBLIC
  const postPublic = async () => {
    if (!image) return alert("Please select an image!");
    if (!data.title) return alert("Please enter a title!");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("story", data.story);
    formData.append("name", user.name);
    formData.append("theme", selectedTheme);
    formData.append("createdBy", user._id);

    try {
      const res = await axios
        .post(`${API_BASE}/api/story/add`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          // console.log("Story created successfully!", res.data);
          toast.success("Story created successfully!");
          fetchStories();
          fetchPrivateStories();
          setLoading(false);
          setData((prev) => ({ ...prev, story: null, title: null }));
          setOutput("");
          setImagePreview(null);
          setImage(null);
          return <Navigate to="/stories" />;
        })
        .catch((error) => {
          console.error("Error submitting story !!", error);
          toast.error(error.message);
        });
    } catch (error) {
      console.error("Error submitting story !!", error);
      toast.error(error.message);
    }
  };

  //POST STORY IN PRIVATE
  const postPrivate = async () => {
    if (!image) return alert("Please select an image!");
    if (!data.title) return alert("Please enter a title!");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("story", data.story);
    formData.append("name", user.name);
    formData.append("theme", selectedTheme);
    formData.append("createdBy", user._id);

    try {
      const res = await axios
        .post(`${API_BASE}/api/story/private`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          toast.success("Story created successfully!");
          fetchStories();
          fetchPrivateStories();
          setLoading(false);
          setData((prev) => ({ ...prev, story: null, title: null }));
          setOutput("");
          setImagePreview(null);
          setImage(null);
          return <Navigate to="/stories" />;
        })
        .catch((error) => {
          console.error("Error submitting story !!", error);
          toast.error(error.message);
        });
    } catch (error) {
      console.error("Error posting private story:");
      toast.error("Failed to post private story. Please try again.");
    }
  };

  //GET ALL PUBLIC STORIES
  const fetchStories = async () => {
    setLoading(true);
    try {
      const publicStory = await axios.get(`${API_BASE}/api/story/public`);

      setStories(publicStory.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching stories:", err);
      toast.error("Error fetching stories. Please try again later.");
    }
  };

  //GET PRIVATE STORIES
  const fetchPrivateStories = async () => {
    setLoading(true);
    try {
      const privateStories = await axios.get(`${API_BASE}/api/story/private`, {
        headers: {
          Authorization: authorizationToken, // Include the token in the headers
        },
      });

      setPrivateStories(privateStories.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching stories:", err);
      toast.error("Error fetching stories. Please try again later.");
    }
  };

  //GET SINGLE STORY
  const fetchSingleStory = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE}/api/story/${id}`);
      setStory(response.data);

      filterByTheme(response.data.theme, response.data._id);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Story:", error);
    }
  };

  // FILTER STORY BY THEME
  const filterByTheme = (theme, storyId) => {
    if (!stories || stories.length === 0) {
      console.warn("Stories are not loaded yet!");
      return;
    }
    const relatedStories = stories.filter(
      (story) =>
        story.theme === theme &&
        story._id !== storyId &&
        story.isPrivate == false // optional: exclude the current story
    );
    setRelated(relatedStories);
  };

  useEffect(() => {
    fetchStories();
    fetchPrivateStories();
  }, [token]);

  return (
    <StoryContext.Provider
      value={{
        story,
        stories,
        privateStories,
        loading,
        output,
        prompt,
        setPrompt,
        setLoading,
        postPublic,
        postPrivate,
        setData,
        themes,
        selectedTheme,
        setSelectedTheme,
        setImagePreview,
        fetchStories,
        fetchPrivateStories,
        handleSubmit,
        filterByTheme,
        imagePreview,
        fetchSingleStory,
        related,
        handleImageChange,
      }}
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
