import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ICONS } from "@/icons/icons";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="">
      {/* header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden md:py-24">
        <div className="absolute w-16 h-16 bg-green-500 rounded-full top-20 left-10 opacity-80"></div>
        <div className="absolute w-20 h-20 bg-yellow-400 rounded-full bottom-20 right-10 opacity-80"></div>

        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold text-blue-500 md:text-5xl">
              Our Story
            </h1>
            <p className="text-xl text-gray-700">
              Discover the team behind StoryCrafter and our mission to unleash
              creativity through AI-powered storytelling.
            </p>
          </div>
        </div>
      </section>
      {/* Our Mission */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-10 md:flex-row">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute w-full h-full border-2 border-blue-500 rounded-lg -top-4 -left-4"></div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="https://placehold.co/600"
                      alt="Our Team"
                      width={500}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold text-gray-800">
                  Our Mission
                </h2>
                <p className="mb-6 text-gray-700">
                  At StoryCrafter, we believe in the power of visual
                  storytelling. Our mission is to democratize creativity by
                  providing cutting-edge AI tools that empower everyone to
                  create stunning visuals that tell compelling stories.
                </p>
                <p className="text-gray-700">
                  Founded in 2022, we've helped thousands of creators,
                  marketers, and dreamers bring their visions to life through
                  our intuitive platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Meet Our Team
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              The passionate individuals behind StoryCrafter who are dedicated
              to pushing the boundaries of AI-powered creativity.
            </p>
          </div>

          <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="overflow-hidden transition-transform bg-white rounded-lg shadow-md hover:scale-105">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://placehold.co/300"
                  alt="Team Member"
                  width={384}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Mayur Kapadi
                </h3>
                <p className="mb-3 text-blue-500">Founder & CEO</p>
                <p className="text-gray-600">
                  Visionary leader driving innovation by blending creativity and
                  technology to build impactful digital solutions.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="overflow-hidden transition-transform bg-white rounded-lg shadow-md hover:scale-105">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://placehold.co/300"
                  alt="Team Member"
                  width={384}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Raj Maheshwari
                </h3>
                <p className="mb-3 text-blue-500">Creative Director</p>
                <p className="text-gray-600">
                  Design thinker with a passion for user-centric interfaces and
                  intuitive digital experiences.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="overflow-hidden transition-transform bg-white rounded-lg shadow-md hover:scale-105">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://placehold.co/300"
                  alt="Team Member"
                  width={384}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Ayush Mer</h3>
                <p className="mb-3 text-blue-500">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Tech strategist focused on scalable architecture and seamless
                  backend integration for robust web platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-16 overflow-hidden md:py-24 bg-blue-50">
        <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-1/2 -translate-y-1/2 bg-purple-500 rounded-full opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 transform -translate-x-1/2 translate-y-1/2 bg-yellow-300 rounded-full opacity-10"></div>

        <div className="container relative px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Our Values
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              The principles that guide everything we do at StoryCrafter.
            </p>
          </div>

          <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            {/* Value 1 */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full">
                <ICONS.THUNDER size={30} className="text-blue-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-center text-gray-800">
                Innovation
              </h3>
              <p className="text-center text-gray-600">
                We constantly push the boundaries of what's possible with AI and
                creative technology.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full">
                <ICONS.USERS size={30} className="text-blue-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-center text-gray-800">
                Accessibility
              </h3>
              <p className="text-center text-gray-600">
                We believe creative tools should be accessible to everyone,
                regardless of technical expertise.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full">
                <ICONS.FINGERPRINT size={30} className="text-blue-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-center text-gray-800">
                Quality
              </h3>
              <p className="text-center text-gray-600">
                We're committed to delivering the highest quality AI-generated
                content that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 text-white bg-blue-600 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Join Our Creative Community
            </h2>
            <p className="mb-8 text-xl">
              Be part of a growing community of creators using AI to push the
              boundaries of visual storytelling.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/start-creating"
                className="px-8 py-3 font-medium text-blue-600 transition-colors bg-white rounded-md hover:bg-blue-50"
              >
                Start Creating
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 font-medium transition-colors bg-transparent border-2 border-white rounded-md hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </section>
  );
};

export default About;
