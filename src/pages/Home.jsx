import React from "react";
// rrd
import { Link } from "react-router-dom";
//icons
import { ICONS } from "@/icons/icons";
//components
import ShapeDecorator from "@/components/shape-decorator";
import ThemeCard from "@/components/theme-card";
import FeatureCard from "@/components/feature-card";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative">
          <div className="absolute top-10 right-20">
            <ShapeDecorator
              type="circle"
              color="#ecd71d"
              className="w-12 h-12"
            />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#170f49] mb-6">
              Where Images Paint a Thousand Stories
            </h1>
            <p className="text-lg text-[#404040] max-w-2xl mx-auto mb-8">
              Unleash your creativity with our AI-powered image generation
              platform. Create stunning visuals for any occasion.
            </p>
            <div className="flex justify-center gap-4 text-text">
              {/* <Link href="/create"> */}
              <Button className="p-2 border !bg-btn">Start Creating</Button>
              {/* </Link> */}
              {/* <Link href="/explore"> */}
              <Button className="border p-2">Explore Gallery</Button>
              {/* </Link> */}
            </div>
          </div>

          <div className="absolute bottom-10 left-20">
            <ShapeDecorator
              type="circle"
              color="#39a137"
              className="w-10 h-10"
            />
          </div>
        </div>
      </section>

      {/* Themed Prompts Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center">
            Fresh & Relevant Themed Prompts for Every Occasion
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ThemeCard
              src="/placeholder.svg?height=300&width=300"
              alt="Vintage theme"
              title="Vintage Aesthetics"
              description="Explore the charm of bygone eras with our vintage-inspired prompts."
              href="/themes/vintage"
            />
            <ThemeCard
              src="/placeholder.svg?height=300&width=300"
              alt="Futuristic theme"
              title="Futuristic Visions"
              description="Glimpse into tomorrow with our cutting-edge futuristic prompts."
              href="/themes/futuristic"
            />
            <ThemeCard
              src="/placeholder.svg?height=300&width=300"
              alt="Nature theme"
              title="Natural Wonders"
              description="Capture the beauty of nature with our environmental prompts."
              href="/themes/nature"
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/themes" className="btn-primary">
              View All Themes
            </Link>
          </div>
        </div>
      </section>

      {/* Winter Wonders Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl relative">
          <div className="absolute top-0 right-0">
            <ShapeDecorator
              type="triangle"
              color="#702dff"
              className="w-12 h-12"
            />
          </div>

          <div className="text-center mb-12">
            <h2 className="section-title">Winter Wonders</h2>
            <p className="section-subtitle mx-auto">
              Embrace the magic of winter with our specially curated collection
              of snowy scenes and cozy moments.
            </p>
          </div>

          <div className="absolute bottom-0 left-0">
            <ShapeDecorator
              type="square"
              color="#ecd71d"
              className="w-10 h-10"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<ICONS.CAMERA className="text-[#702dff]" />}
              title="High-Quality Images"
              description="Generate stunning, high-resolution images that capture your vision perfectly."
            />
            <FeatureCard
              icon={<ICONS.SPARKELS className="text-[#702dff]" />}
              title="Creative Prompts"
              description="Access thousands of creative prompts to inspire your next masterpiece."
            />
            <FeatureCard
              icon={<ICONS.THUNDER className="text-[#702dff]" />}
              title="Fast Generation"
              description="Create beautiful images in seconds with our lightning-fast AI technology."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
