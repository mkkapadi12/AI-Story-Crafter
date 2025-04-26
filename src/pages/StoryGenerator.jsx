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
      <div className="relative px-6 py-20 overflow-hidden text-white bg-gradient-to-br from-purple-700 to-pink-400 md:px-20">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl drop-shadow-md">
            Let AI Craft Your Next Great Story ✨
          </h1>
          <p className="text-sm text-purple-100 md:text-xl drop-shadow-sm">
            Choose a theme, describe a scene, or upload an image — and let magic
            unfold!
          </p>
        </div>

        {/* Decorative Shapes */}
        {/* <div className="absolute w-96 h-96 bg-pink-300 rounded-full opacity-20 blur-3xl top-[-80px] left-[-80px]" /> */}
        {/* <div className="absolute w-72 h-72 bg-yellow-300 rounded-full opacity-20 blur-3xl bottom-[-60px] right-[-60px]" /> */}
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-4 md:px-12 lg:px-24 lg:py-12">
        <CreateStory />
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
