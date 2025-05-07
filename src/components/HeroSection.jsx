import React from "react";
import ShapeDecorator from "./shape-decorator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative px-4 py-16 overflow-hidden">
      <div className="container relative mx-auto max-w-7xl">
        <div className="absolute top-10 right-20 z-[-999]">
          <ShapeDecorator type="circle" color="#ecd71d" className="w-12 h-12" />
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-[#2B2B2B] text-lg sm:text-xl mb-2">
            Explore Limitless Possibilities{" "}
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#007BFF] mb-6">
            Where Images Paint a Thousand Stories
          </h1>
          <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto mb-8">
            Unleash your creativity with our AI-powered image generation
            platform. Create stunning visuals for any occasion.
          </p>
          <div className="flex justify-center gap-4 text-white">
            <Link to="/start-creating">
              <Button className="p-2 bg-[#FF5599] cursor-pointer">
                Start Creating
              </Button>
            </Link>
            <Link to="/explore">
              <Button className="p-2 bg-[#FF5599] cursor-pointer">
                Explore Gallery
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-20 z-[-999]">
          <ShapeDecorator type="circle" color="#39a137" className="w-10 h-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
