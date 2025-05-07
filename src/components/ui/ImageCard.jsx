import React from "react";
import { Link } from "react-router-dom";

export default function ImageCard({ src, alt, href = "/" }) {
  return (
    <Link
      to={href}
      className="block max-w-[300px] max-h-[400px] overflow-hidden transition-shadow rounded-lg shadow-md hover:shadow-lg"
    >
      <div className="relative">
        <img
          src={src || "https://placehold.co/300"}
          alt={alt}
          className="object-cover"
        />
      </div>
    </Link>
  );
}
