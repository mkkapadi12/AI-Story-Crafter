import { ICONS } from "@/icons/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-2 bg-gray-100 lg:p-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-blue-500">
              StoryCrafter
            </h3>
            <p className="mb-4 text-gray-600">
              Discover our most popular AI-generated stories and images that
              have captivated our community.
            </p>
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-500 hover:text-blue-500">
                <ICONS.FACEBOOK className="w-5 h-5" />
              </Link>
              <Link to="/" className="text-gray-500 hover:text-blue-500">
                <ICONS.TWITTER className="w-5 h-5" />
              </Link>
              <Link to="/" className="text-gray-500 hover:text-blue-500">
                <ICONS.INSTAGRAM className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/stories"
                  className="text-gray-600 hover:text-blue-500"
                >
                  All Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/fiction"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Fiction
                </Link>
              </li>
              <li>
                <Link
                  to="/seasonal"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Seasonal
                </Link>
              </li>
              <li>
                <Link
                  to="/nature"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Nature
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-600 hover:text-blue-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Connect
            </h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <p className="text-gray-600">
                Stay updated with our latest features
              </p>
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center text-gray-500 border-t border-gray-200">
          <p>© {new Date().getFullYear()} StoryCrafter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
