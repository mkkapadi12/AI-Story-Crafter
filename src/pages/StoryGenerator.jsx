import CreateStory from "@/components/CreateStory";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function StoryGenerator() {
  return (
    <section>
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden md:py-24">
        <div className="absolute w-16 h-16 bg-green-500 rounded-full top-20 left-10 opacity-80"></div>
        <div className="absolute w-20 h-20 bg-yellow-400 rounded-full bottom-20 right-10 opacity-80"></div>

        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold text-blue-500 md:text-5xl">
              Let AI Craft Your Next Great Story
            </h1>
            <p className="text-xl text-gray-700">
              Choose a theme, describe a scene, or upload an image — and let
              magic unfold!
            </p>
          </div>
        </div>
        </section>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-4 md:px-12 lg:px-24 lg:py-12 bg-gray-50">
        <CreateStory />
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
