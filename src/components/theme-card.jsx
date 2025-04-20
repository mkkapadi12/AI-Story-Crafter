import React from "react";
import { Link } from "react-router-dom";

export default function ThemeCard({
  src,
  alt,
  title,
  description,
  href = "#",
}) {
  return (
    <div className="flex flex-col">
      <Link
        href={href}
        className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow mb-3"
      >
        <div className="relative aspect-square">
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <h3 className="font-semibold text-[#170f49]">{title}</h3>
      <p className="text-sm text-[#404040] mt-1">{description}</p>
    </div>
  );
}
