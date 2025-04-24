import React, { useState } from "react";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import Base64 from "base64-js";
import MarkdownIt from "markdown-it";
import { Upload, LightbulbIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Loading from "@/helpers/Loading";
import { useAuthContext } from "@/Context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useStoryContext } from "@/Context/StoryContext";

// Replace with your actual API key
const API_KEY = process.env.GEMINI_API_KEY;

const CreateStory = () => {
  const { user } = useAuthContext();
  const { fetchStories } = useStoryContext();

  const [selectedTheme, setSelectedTheme] = useState("anime");
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  //hadling image upload
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    story: "",
    user,
  });

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

  // console.log("imagePreview :", imagePreview);

  const themes = [
    { id: "love", name: "Love", icon: "❤️" },
    { id: "sad", name: "Sad", icon: "😢" },
    { id: "melancholy", name: "Melancholy", icon: "😭" },
    { id: "happy", name: "Happy", icon: "🎉" },
    { id: "tragic", name: "Tragic", icon: "🥀" },
    { id: "sciFi", name: "Sci-Fi", icon: "👽" },
    { id: "thriller", name: "Thriller", icon: "🔪" },
    { id: "adventure", name: "Adventure", icon: "🧗" },
    { id: "comedy", name: "Comedy", icon: "😂" },
    { id: "horror", name: "Horror", icon: "👻" },
    { id: "crime", name: "Crime", icon: "🕵️" },
    { id: "mystery", name: "Mystery", icon: "🧩" },
    { id: "drama", name: "Drama", icon: "🎭" },
    { id: "romance", name: "Romance", icon: "💘" },
    { id: "animation", name: "Animation", icon: "🎨" },
  ];

  // console.log("prompt :", prompt);
  // console.log("selectedTheme :", selectedTheme);

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
              text: `Create a story based on the image and the following prompt. The story should be imaginative, engaging, and related to the theme and must add icons and emoji. In the last of story give moral of the story.In starting of the story give also title.\n\n${prompt} remember to use the theme ${selectedTheme}.\n\n And give space between title and story.`,
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
      // setPrompt("");
    } catch (error) {
      setOutput((prevOutput) => prevOutput + "<hr>" + error);
    }
  };

  //for debugging purpose
  // console.log("data :", data);
  // console.log("output :", output);

  const saveStory = async () => {
    if (!image) return alert("Please select an image!");
    // if (!prompt) return alert("Please enter a prompt!");
    // console.log("image =>", image);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("story", data.story);
    formData.append("name", user.name);
    formData.append("theme", selectedTheme);
    formData.append("createdBy", user._id);

    //For development : http://localhost:5002/api/story/add
    //For production : https://ai-story-crafter-server.vercel.app/api/story/add

    try {
      const res = await axios
        .post(
          "https://ai-story-crafter-server.vercel.app/api/story/add",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          // console.log("Story created successfully!", res.data);
          toast.success("Story created successfully!");
          fetchStories();
          setData({ title: "", story: "" });
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

  return (
    <div className="w-full max-w-3xl px-4 py-10 mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-center text-purple-700 md:text-4xl">
        Create Your AI-Generated Story
      </h1>
      <p className="mb-10 text-center text-gray-600">
        Upload an image, set the tone, and let our AI craft a tale that
        captivates.
      </p>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Upload Section */}
        <div className="text-center">
          <p className="mb-2 text-sm text-gray-500">
            Upload an image to inspire your story
          </p>

          <div className="flex flex-col items-center justify-center w-full max-w-md p-6 mx-auto border-2 border-purple-300 border-dashed rounded-xl bg-purple-50">
            {!imagePreview ? (
              <>
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <Upload className="w-10 h-10 mb-2 text-purple-500" />
                  <p className="font-medium text-purple-600">
                    Click to upload an image
                  </p>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </>
            ) : (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="object-cover rounded-lg shadow-md max-h-64"
                />
                <button
                  onClick={() => setImagePreview(null)}
                  className="absolute px-2 py-1 text-xs font-semibold text-gray-600 bg-white border border-gray-300 rounded-full top-2 right-2 hover:bg-gray-100"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Title Input */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Story Title
          </label>
          <Input
            placeholder="Enter a title..."
            className="w-full border-gray-300"
            onChange={(e) =>
              setData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        {/* Description Textarea */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Short Description
          </label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe a bit about the story..."
            className="w-full min-h-[100px] border-gray-300"
          />
          <div className="flex items-start gap-2 mt-2 text-sm text-gray-700">
            <LightbulbIcon className="w-5 h-5 mt-1 text-yellow-500" />
            <p>
              Tip: Mention a mood, scene, or character to guide the AI — like a
              lost traveler in a snowy forest.
            </p>
          </div>
        </div>

        {/* Theme Selection */}
        <div>
          <label className="block mb-3 text-sm font-medium text-gray-700">
            Select a Theme
          </label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {themes.map((theme) => (
              <div
                key={`${theme.id}-${theme.icon}`}
                onClick={() => setSelectedTheme(theme.id)}
                className={cn(
                  "flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all",
                  selectedTheme === theme.id
                    ? "bg-purple-100 border-purple-500 text-purple-700 shadow-sm"
                    : "bg-white border-gray-200 hover:bg-gray-50"
                )}
              >
                <span className="text-xl">{theme.icon}</span>
                <span className="text-sm font-medium">{theme.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="pt-4 text-center">
          <Button
            type="submit"
            className="px-8 py-2 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700"
          >
            Generate Story
          </Button>
        </div>
      </form>

      {/* Output Section */}
      {loading ? (
        <>
          <Loading loadingText="Loading..." />
        </>
      ) : (
        <>
          <div
            className="my-4 output"
            dangerouslySetInnerHTML={{ __html: output }}
          />
          {output && (
            <>
              {output.includes(
                "Please provide an image or a story description to generate a story."
              ) ? null : (
                <div className="my-4 text-center">
                  <p className="mb-2 text-sm text-gray-500">
                    If you like the story, you can save it!
                  </p>
                  <Button
                    onClick={saveStory}
                    className="text-white bg-purple-600 cursor-pointer hover:bg-purple-700"
                  >
                    Save
                  </Button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CreateStory;
