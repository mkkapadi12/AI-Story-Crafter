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
import Footer from "@/components/Footer";

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
          <h2 className="text-[#2B2B2B] text-xl mb-2 text-center">
            Fresh & Relevant Themed Prompts for Every Occasion
          </h2>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
            <ThemeCard
              src="https://wallpapers.com/images/featured/vintage-aesthetic-pictures-1yd8eeprzyp1dgup.jpg"
              alt="Vintage theme"
              title="Vintage Aesthetics"
              description="Explore the charm of bygone eras with our vintage-inspired prompts."
              href="/themes/vintage"
            />
            <ThemeCard
              src="https://media.gettyimages.com/id/1310953049/photo/a-world-like-no-other.jpg?s=612x612&w=gi&k=20&c=Cz4Q4VN88lUzy1HusI91pUC6yELh9vRiYOasM0Vrnxw="
              alt="Futuristic theme"
              title="Futuristic Visions"
              description="Glimpse into tomorrow with our cutting-edge futuristic prompts."
              href="/themes/futuristic"
            />
            <ThemeCard
              src="https://media.istockphoto.com/id/1346270784/photo/niagara-falls-horseshoe-falls.jpg?s=612x612&w=0&k=20&c=ra4FaCjLDTMjatCIOTCJP-ilDr0amtzMgI8aAjyf3qU="
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
      <Footer />
    </main>
  );
};

export default Home;
