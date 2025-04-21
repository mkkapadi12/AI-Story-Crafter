import React, { useState } from "react";
import { Upload, LightbulbIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const CreateStory = () => {
  const [selectedTheme, setSelectedTheme] = useState("anime");

  const themes = [
    { id: "anime", name: "Anime", icon: "🎭" },
    { id: "love", name: "Love", icon: "❤️" },
    { id: "sad1", name: "Sad", icon: "😢" },
    { id: "sad2", name: "Melancholy", icon: "😭" },
    { id: "happy", name: "Happy", icon: "🎉" },
    { id: "anime2", name: "Otaku", icon: "🎌" },
    { id: "sad3", name: "Tragic", icon: "🥀" },
  ];

  return (
    <div className="w-full max-w-3xl px-4 py-10 mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-center text-purple-700 md:text-4xl">
        Create Your AI-Generated Story
      </h1>
      <p className="mb-10 text-center text-gray-600">
        Upload an image, set the tone, and let our AI craft a tale that
        captivates.
      </p>

      <div className="space-y-8">
        {/* Upload Section */}
        <div className="text-center">
          <p className="mb-2 text-sm text-gray-500">
            Upload an image to inspire your story
          </p>
          <div className="flex flex-col items-center justify-center p-10 border-2 border-purple-300 border-dashed rounded-xl bg-purple-50">
            <Upload className="w-10 h-10 mb-2 text-purple-500" />
            <p className="text-sm font-medium text-purple-600">
              Drop or click to upload
            </p>
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
          />
        </div>

        {/* Description Textarea */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Short Description
          </label>
          <Textarea
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
              <button
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
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="pt-4 text-center">
          <Button className="px-8 py-2 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700">
            Generate Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
