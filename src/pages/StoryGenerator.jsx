import CreateStory from "@/components/CreateStory";
import Navbar from "@/components/Navbar";
import React from "react";

export default function StoryGenerator() {
  return (
    <section>
      {/* header */}
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4 md:p-24">
        <CreateStory />
      </div>
    </section>
  ); 
}
