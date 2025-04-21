import React from "react";
// rrd
import { Link } from "react-router-dom";
//icons
import { ICONS } from "@/icons/icons";
//components
import ThemeCard from "@/components/theme-card";
import FeatureCard from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import WinterWonder from "@/components/WinterWonder";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main>
      {/* header */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />

      {/* Themed Prompts Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-[#007BFF] text-xl mb-2 text-center">
            Fresh & Relevant Themed Prompts for Every Occasion
          </h2>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
            <ThemeCard
              src="https://placehold.co/300"
              alt="Vintage theme"
              title="Vintage Aesthetics"
              description="Explore the charm of bygone eras with our vintage-inspired prompts."
              href="/themes/vintage"
            />
            <ThemeCard
              src="https://placehold.co/300"
              alt="Futuristic theme"
              title="Futuristic Visions"
              description="Glimpse into tomorrow with our cutting-edge futuristic prompts."
              href="/themes/futuristic"
            />
            <ThemeCard
              src="https://placehold.co/300"
              alt="Nature theme"
              title="Natural Wonders"
              description="Capture the beauty of nature with our environmental prompts."
              href="/themes/nature"
            />
          </div>

          <div className="mt-12 text-center text-white">
            <Link href="/themes">
              <Button className="p-2 bg-[#FF5599] cursor-pointer">
                View All Themes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Winter Wonders Section */}
      <WinterWonder />

      {/* Features Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<ICONS.CAMERA className="text-[#FF77AA]" />}
              title="High-Quality Images"
              description="Generate stunning, high-resolution images that capture your vision perfectly."
            />
            <FeatureCard
              icon={<ICONS.SPARKELS className="text-[#FF77AA]" />}
              title="Creative Prompts"
              description="Access thousands of creative prompts to inspire your next masterpiece."
            />
            <FeatureCard
              icon={<ICONS.THUNDER className="text-[#FF77AA]" />}
              title="Fast Generation"
              description="Create beautiful images in seconds with our lightning-fast AI technology."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
