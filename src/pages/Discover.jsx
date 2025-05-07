import React from "react";
import ImageCard from "../components/ui/ImageCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import ShapeDecorator from "@/components/shape-decorator";
import Footer from "@/components/Footer";
import { useStoryContext } from "@/Context/StoryContext";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { StoryCircles } from "@/components/story-circles";
import StoryCardUpdate from "@/components/StoryCardUpdate";
import { TrendingTopics } from "@/components/TrendingTopics";

export default function Discover() {
  const { stories } = useStoryContext();

  return (
    <main>
      {/* header */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative px-4 py-16 overflow-hidden">
        <div className="container relative mx-auto max-w-7xl">
          <div className="absolute top-15 right-10 z-[-999]">
            <ShapeDecorator
              type="circle"
              color="#ecd71d"
              className="w-12 h-12"
            />
          </div>
          <div className="mb-12 text-center">
            <h2 className="text-[#2B2B2B] text-lg sm:text-xl mb-2">
              Explore a World of Imagination and Creativity
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#007BFF] mb-6">
              Discover Captivating Stories Through Visuals
            </h1>
            <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto mb-8">
              Welcome to our Explore page, where stunning visuals blend
              seamlessly with captivating stories. Immerse yourself in a world
              of creativity as you discover a diverse range of narratives that
              evoke emotions and spark your imagination.
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 left-20 z-[-999]">
          <ShapeDecorator type="circle" color="#39a137" className="w-10 h-10" />
        </div>
      </section>

      {/* Story Circles Section */}
      <section className="px-4 py-6 md:px-8 lg:px-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Trending Stories
            </h2>
            <Link
              to="/stories"
              className="flex items-center text-sm font-medium text-blue-500"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <StoryCircles />
        </div>
      </section>

      {/* Featured Stories Grid */}
      <section className="px-4 py-10 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Featured Stories
            </h2>
            <Link
              href="/stories/featured"
              className="flex items-center text-sm font-medium text-blue-500"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <StoryCardUpdate />
        </div>
      </section>

      {/* Trending Topics */}
      <section className="px-4 py-10 md:px-8 lg:px-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Explore Topics</h2>
            <Link
              href="/topics"
              className="flex items-center text-sm font-medium text-blue-500"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <TrendingTopics />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
