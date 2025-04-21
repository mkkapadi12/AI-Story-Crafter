import React from "react";
import { Link } from "react-router-dom";

export default function ImageCard({ src, alt, href = "/" }) {
  return (
    <Link
      to={href}
      className="block overflow-hidden transition-shadow rounded-lg shadow-md hover:shadow-lg"
    >
      <div className="relative aspect-square">
        <img
          src={src || "https://placehold.co/300"}
          alt={alt}
          className="object-cover"
        />
      </div>
    </Link>
  );
}
