import React from "react";
import ImageCard from "../components/ui/ImageCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import ShapeDecorator from "@/components/shape-decorator";

export default function Discover() {
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

      {/* Search Section */}
      <section className="px-4 py-8">
        <div className="container max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search stories here...."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5599] focus:border-transparent"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FF5599] text-white px-4 py-1.5 rounded-md">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 py-8">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="w-24 h-8 ">
              <Button className="bg-[#FF5599] text-white cursor-pointer">
                nature
              </Button>
            </div>
            <div className="w-24 h-8 ">
              <Button className="bg-[#FF5599] text-white cursor-pointer">
                nature
              </Button>
            </div>
            <div className="w-24 h-8 ">
              <Button className="bg-[#FF5599] text-white cursor-pointer">
                nature
              </Button>
            </div>
            <div className="w-24 h-8 ">
              <Button className="bg-[#FF5599] text-white cursor-pointer">
                nature
              </Button>
            </div>
            <div className="w-24 h-8 ">
              <Button className="bg-[#FF5599] text-white cursor-pointer">
                nature
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 py-12">
        <h2 className="text-[#2B2B2B] text-lg sm:text-xl mb-4 text-center">
          Explore a World of Imagination and Creativity
        </h2>{" "}
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <ImageCard src="https://placehold.co/300" alt="Gallery image 1" />
            <ImageCard src="https://placehold.co/300" alt="Gallery image 2" />
            <ImageCard src="https://placehold.co/300" alt="Gallery image 3" />
            <ImageCard src="https://placehold.co/300" alt="Gallery image 4" />
            <ImageCard src="https://placehold.co/300" alt="Gallery image 5" />
            <ImageCard src="https://placehold.co/300" alt="Gallery image 6" />
            <ImageCard src="https://placehold.co/300" alt="Gallery image 7" />
            <ImageCard src="https://placehold.co/300" alt="Gallery image 8" />
          </div>

          <div className="mt-12 text-center">
            <button className="btn-primary">Load More</button>
          </div>
        </div>
      </section>
    </main>
  );
}
