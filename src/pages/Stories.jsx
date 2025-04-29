import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StoryCard from "@/components/StoryCard";
import FeaturedStory from "@/components/FeaturedStory";
import Navbar from "@/components/Navbar";
import { useStoryContext } from "@/Context/StoryContext";
import Loading from "@/helpers/Loading";
import Footer from "@/components/Footer";

export default function Stories() {
  const { stories, loading } = useStoryContext();
  const [selectedTab, setSelectedTab] = useState("all");

  const publicStories = stories.filter((story) => story.isPrivate == false);

  const filteredStories =
    selectedTab === "all"
      ? publicStories
      : publicStories.filter((story) =>
          story.theme.toLowerCase().includes(selectedTab.toLowerCase())
        );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-white">
      <Navbar />
      {/* Top Stories Hero Section */}
      <main className="relative top-0 py-10 mx-auto rounded-lg bg-blue-50 max-w-7xl">
        <div className="container px-4 mx-auto">
          <h1 className="mb-6 text-3xl font-bold text-center text-blue-600 md:text-4xl lg:text-5xl">
            Top Stories
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-center text-gray-600">
            Discover our most popular AI-generated stories and images that have
            captivated our community
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeaturedStory
              className="md:col-span-2 lg:col-span-3"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumjxs_M6inrsivi1bsDPvVuenhd5-ED3rzg&s"
              title="Winter Wonderland Adventures"
              description="Embrace the enchantment of the winter season with our 'Winter Wonders' themed stories. Capture the essence of snowy landscapes and cozy moments."
              category="Seasonal"
            />
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute w-12 h-12 bg-green-500 rounded-full left-10 top-20 opacity-70"></div>
        <div className="absolute w-10 h-10 bg-yellow-400 rounded-full right-10 top-10 opacity-70"></div>
      </main>

      {/* Filter Section */}
      <section className="py-6 mx-auto border-b border-gray-200 max-w-7xl">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-xl font-semibold text-gray-800">
              Browse Stories
            </h2>
            <Tabs
              defaultValue="all"
              value={selectedTab}
              onValueChange={setSelectedTab}
              className="w-full md:w-auto"
            >
              <TabsList className="grid w-full grid-cols-4 md:w-auto md:grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="happy">Happy</TabsTrigger>
                <TabsTrigger value="comedy">Comedy</TabsTrigger>
                <TabsTrigger value="love">Love</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* More Stories Section */}
      <section className="py-12 mx-auto max-w-7xl">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-gray-800">
            More Stories
          </h2>

          {loading ? (
            <Loading loadingText="loading..." />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredStories.map((story) => (
                <StoryCard
                  key={story._id}
                  image={story.coverImage}
                  title={story.title}
                  description={story.story}
                  theme={story.theme}
                  id={story._id}
                  createdBy={story.createdBy}
                />
              ))}
            </div>
          )}

          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              className="px-6 text-pink-500 border-pink-500 rounded-full hover:bg-pink-50"
            >
              View All Stories
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </section>
  );
}
