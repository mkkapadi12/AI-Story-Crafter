import React, { useState } from "react";
import { Upload, LightbulbIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CreateStory = () => {
  const [selectedTheme, setSelectedTheme] = useState("anime");

  const themes = [
    { id: "anime", name: "Anime Theme", icon: "🎭" },
    { id: "love", name: "Love Theme", icon: "❤️" },
    { id: "sad1", name: "Sad Theme", icon: "😢" },
    { id: "sad2", name: "Sad Theme", icon: "😭" },
    { id: "happy", name: "Happy Theme", icon: "🎉" },
    { id: "anime2", name: "Anime Theme", icon: "🎌" },
    { id: "sad3", name: "Sad Theme", icon: "🥀" },
  ];

  return (
    <div className="w-full max-w-xl mx-auto">
      <h1 className="mb-6 text-2xl font-bold text-center text-purple-600">
        Generate Story From Image
      </h1>

      <div className="space-y-6">
        <div className="text-center">
          <p className="mb-2 text-sm text-gray-500">Upload Image</p>
          <div className="flex flex-col items-center justify-center p-10 border border-gray-200 rounded-lg">
            <div className="w-8 h-8 mb-4 text-gray-400">
              <Upload className="w-full h-full" />
            </div>
            <p className="text-sm text-gray-500">Upload Image</p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm text-gray-700">Enter Title</p>
          <Input placeholder="Enter title..." className="w-full" />
        </div>

        <div>
          <p className="mb-2 text-sm text-gray-700">
            Describe A Bit About Story
          </p>
          {/* <Textarea
            placeholder="Enter title..."
            className="w-full min-h-[80px]"
          /> */}
          <div className="flex items-start gap-2 mt-2 text-sm text-gray-700">
            <LightbulbIcon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <p>
              Describe the first signs of spring you notice around you: the
              blooming flowers, the singing birds, or the gentle breeze.
            </p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm text-gray-700">Theme</p>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((theme) => (
              <button
                key={`${theme.id}-${theme.icon}`}
                onClick={() => setSelectedTheme(theme.id)}
                className={cn(
                  "flex items-center gap-1 px-2 py-1.5 rounded-md border text-sm",
                  selectedTheme === theme.id
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 hover:bg-gray-50"
                )}
              >
                <span className="text-lg">{theme.icon}</span>
                <span className="truncate">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="px-8 text-white bg-purple-600 hover:bg-purple-700">
            Generate story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
