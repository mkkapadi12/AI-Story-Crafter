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
        className="block mb-3 overflow-hidden transition-shadow rounded-lg shadow-md hover:shadow-lg w-[360px] h-[250px]"
      >
        <div className="relative flex items-center justify-center aspect-square">
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className="object-cover w-full h-full mx-auto rounded-lg"
          />
        </div>
      </Link>
      <h3 className="font-semibold text-[#170f49]">{title}</h3>
      <p className="text-sm text-[#404040] mt-1">{description}</p>
    </div>
  );
}
