import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Loading from "@/helpers/Loading";
import { useStoryContext } from "@/Context/StoryContext";
import { ICONS } from "@/icons/icons";

const CreateStory = () => {
  const {
    postPublic,
    postPrivate,
    clearStroy,
    output,
    setData,
    handleImageChange,
    loading,
    prompt,
    setPrompt,
    imagePreview,
    setImagePreview,
    handleSubmit,
    themes,
    selectedTheme,
    setSelectedTheme,
  } = useStoryContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-3xl px-4 py-10 mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-center text-gray-800 md:text-4xl">
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
                  <ICONS.UPLOAD className="w-10 h-10 mb-2 text-blue-500" />
                  <p className="font-medium text-blue-600">
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
          <label className="block mb-2 text-sm font-medium text-blue-700">
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
          <label className="block mb-2 text-sm font-medium text-blue-700">
            Short Description
          </label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe a bit about the story..."
            className="w-full min-h-[100px] border-gray-300"
          />
          <div className="flex items-start gap-2 mt-2 text-sm text-gray-700">
            <ICONS.LIGHTBULB className="w-5 h-5 mt-1 text-yellow-500" />
            <p>
              Tip: Mention a mood, scene, or character to guide the AI — like a
              lost traveler in a snowy forest.
            </p>
          </div>
        </div>

        {/* Theme Selection */}
        <div>
          <label className="block mb-3 text-sm font-medium text-blue-700">
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
                    ? "bg-blue-100 border-blue-500 text-blue-700 shadow-sm"
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
            className="px-8 py-2 text-lg font-semibold text-white transition-transform duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105"
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
            dangerouslySetInnerHTML={{
              __html: output.replace("&lt;br&gt;", "<br />"),
            }}
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
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      onClick={postPublic}
                      className="text-white bg-purple-600 cursor-pointer hover:bg-purple-700"
                    >
                      Post Public
                    </Button>
                    <Button
                      onClick={postPrivate}
                      className="text-white bg-purple-600 cursor-pointer hover:bg-purple-700"
                    >
                      Post Private
                    </Button>
                     <Button
                      onClick={clearStroy}
                      className="text-white bg-purple-600 cursor-pointer hover:bg-purple-700"
                    >
                      Clear
                    </Button>
                  </div>
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
